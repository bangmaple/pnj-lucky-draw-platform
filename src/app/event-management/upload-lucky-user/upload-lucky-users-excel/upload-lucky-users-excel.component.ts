import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import LuckyUserList from '../../../domain/LuckyUserListModel';
import {LuckyUsersService} from '../../../services/lucky-users.service';
import {v4 as uuidv4} from 'uuid';
import {UploadLuckyUsersExcelValidatorService} from '../../../validators/upload-lucky-users-excel-validator.service';
import {UploadLuckyUsersExcelMsgService} from '../../../services/message-services/upload-lucky-users-excel-msg.service';
import {UploadLuckyUsersExcelConfirmService} from '../../../services/confirm-services/upload-lucky-users-excel-confirm.service';
import LuckyUserModel from '../../../domain/LuckyUserModel';
import {BehaviorSubject} from 'rxjs';
import {UploadLuckyUsersExcelHeaderComponent} from './upload-lucky-users-excel-header/upload-lucky-users-excel-header.component';
import {UploadLuckyUserComponent} from '../upload-lucky-user.component';

@Component({
    selector: 'app-upload-lucky-users-excel',
    templateUrl: './upload-lucky-users-excel.component.html',
    styleUrls: ['./upload-lucky-users-excel.component.scss'],
    providers: [UploadLuckyUsersExcelValidatorService,
        UploadLuckyUsersExcelMsgService,
        UploadLuckyUsersExcelConfirmService,
    ]
})
export class UploadLuckyUsersExcelComponent implements OnInit {

    @ViewChild('csvReader')
    csvReader: any;

    @ViewChild(UploadLuckyUsersExcelHeaderComponent)
    private tableHeader: UploadLuckyUsersExcelHeaderComponent;

    _isCreatingLuckyUsersExcelDisplayed = false;
    _isLuckyUsersDataTableIsProcessing = false;
    _isLuckyUsersDataTableIsLoaded = false;

    constructor(private readonly luckyUsersService: LuckyUsersService,
                private readonly validatorService: UploadLuckyUsersExcelValidatorService,
                private readonly msgService: UploadLuckyUsersExcelMsgService,
                private readonly confirmService: UploadLuckyUsersExcelConfirmService,
                private readonly elRef: ElementRef) {
    }

    ngOnInit(): void {
    }

    uploadFileListener($event: any) {
        if (!this.tableHeader.isLuckyUsersDataAppendable) {
            this.getTemporaryLuckyUsers().next([]);
        }
        this.luckyUsersService.readUploadedLuckyUserFile($event);
    }

    showSuccessfullyUploadedLuckyUsersList(): void {
        this.msgService.fireSuccessfullyUploaded();
    }

    showFailUploadedLuckyUsersList(): void {
        this.msgService.fireFailedUpload();
    }

    validatingThenPerformCreatingLuckyUsersList(): void {
        this.getTemporaryLuckyUsers().subscribe(luckyUsers => {
            if (this.validatorService.validateLuckyUsersExcelList(luckyUsers, this.tableHeader.luckyUserListName)) {
                const removedDuplicatedLuckyUsers = this.luckyUsersService.removeDuplicatedLuckyUsers(luckyUsers);
                this.performCreatingLuckyUsersList(removedDuplicatedLuckyUsers);
                this.finalizingCreatedLuckyUsersList();
            }
        }).unsubscribe();
        this.removeTemporaryUsersFromExcelTable();
    }

    private removeTemporaryUsersFromExcelTable(): void {
        if (!this._isCreatingLuckyUsersExcelDisplayed) {
            this.getTemporaryLuckyUsers().next([]);
        }
    }

    private finalizingCreatedLuckyUsersList(): void {
        this.tableHeader.luckyUserListName = '';
        this._isCreatingLuckyUsersExcelDisplayed = false;
    }

    private performCreatingLuckyUsersList(removedDuplicatedLuckyUsers: LuckyUserModel[]): void {
        this.luckyUsersService.addNewLuckyUsersList({
            id: uuidv4().toString().replaceAll('-', ''),
            luckyUsers: removedDuplicatedLuckyUsers,
            createdAt: new Date().getTime().toString(),
            name: this.tableHeader.luckyUserListName
        } as LuckyUserList).then(() => {
            this.showSuccessfullyUploadedLuckyUsersList();
        }).catch(() => {
            this.showFailUploadedLuckyUsersList();
        });
    }

    closeUploadLuckyUsersExcelModal(): void {
        this.confirmService.fireLeaveUploadLuckyUsersListExcel(() => {
            this._isCreatingLuckyUsersExcelDisplayed = false;
        });
    }

    getTemporaryLuckyUsers(): BehaviorSubject<LuckyUserModel[]> {
        return this.luckyUsersService.creatingLuckyUsers$;
    }

    receiveUploadingFile() {
        this.elRef.nativeElement.querySelector('#btnFileUpload').click();
    }
}
