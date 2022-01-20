import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {UploadLuckyUsersTableComponent} from './upload-lucky-users-table/upload-lucky-users-table.component';
import {UploadLuckyUsersTableValidatorService} from '../../validators/upload-lucky-users-table-validator.service';
import {UploadLuckyUsersExcelComponent} from './upload-lucky-users-excel/upload-lucky-users-excel.component';

@Component({
    selector: 'app-upload-lucky-user',
    templateUrl: './upload-lucky-user.component.html',
    styleUrls: ['./upload-lucky-user.component.scss'],
    providers: [UploadLuckyUsersTableValidatorService, MessageService, ConfirmationService]
})
export class UploadLuckyUserComponent implements OnInit {

    _isUploadingUserModalDisplay = false;

    @ViewChild(UploadLuckyUsersTableComponent)
    uploadLuckyUsersTableComp: UploadLuckyUsersTableComponent;

    @ViewChild(UploadLuckyUsersExcelComponent)
    uploadLuckyUsersExcelComp: UploadLuckyUsersExcelComponent;

    ngOnInit(): void {
    }

    showManuallyCreatingLuckyUsersListModal() {
        this.uploadLuckyUsersTableComp._isCreatingLuckyUsersTableDisplayed = true;
        this._isUploadingUserModalDisplay = false;
    }

    showExcelCreatingLuckyUsersListModal() {
        this.uploadLuckyUsersExcelComp._isCreatingLuckyUsersExcelDisplayed = true;
        this._isUploadingUserModalDisplay = false;
    }
}
