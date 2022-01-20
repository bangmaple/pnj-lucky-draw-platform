import {Component, OnInit, ViewChild} from '@angular/core';
import LuckyUserModel from '../../../domain/LuckyUserModel';
import LuckyUserList from '../../../domain/LuckyUserListModel';
import {v4 as uuidv4} from 'uuid';
import {UploadLuckyUsersTableValidatorService} from '../../../validators/upload-lucky-users-table-validator.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {NgxDeepEqualsPureService} from 'ngx-deep-equals-pure';
import {EditLuckyUserModalComponent} from './edit-lucky-user-modal/edit-lucky-user-modal.component';
import {UploadLuckyUsersTableHelpComponent} from './upload-lucky-users-table-help/upload-lucky-users-table-help.component';
import {LuckyUsersService} from '../../../services/lucky-users.service';

@Component({
    selector: 'app-upload-lucky-users-table',
    templateUrl: './upload-lucky-users-table.component.html',
    styleUrls: ['./upload-lucky-users-table.component.scss']
})
export class UploadLuckyUsersTableComponent implements OnInit {
    _isCreatingLuckyUsersTableDisplayed: boolean;
    luckyUsers: LuckyUserModel[];

    luckyUsersList: LuckyUserList;

    currentEditingLuckyUserModel: LuckyUserModel;
    isCurrentEditingLuckyUserSaved = true;

    @ViewChild(EditLuckyUserModalComponent)
    private editLuckyUserModalComp: EditLuckyUserModalComponent;

    @ViewChild(UploadLuckyUsersTableHelpComponent)
    private helpComp: UploadLuckyUsersTableHelpComponent;

    constructor(private readonly luckyUsersTableValidator: UploadLuckyUsersTableValidatorService,
                private readonly luckyUsersService: LuckyUsersService,
                private readonly confirmService: ConfirmationService,
                private readonly msgService: MessageService,
                private readonly deepEqual: NgxDeepEqualsPureService) {
        this._isCreatingLuckyUsersTableDisplayed = false;
    }


    ngOnInit(): void {
        this.currentEditingLuckyUserModel = {
            luckyNumber: undefined,
            store: undefined,
            name: undefined
        };

        this.luckyUsers = [
            {
                name: 'Nguyễn Văn A',
                luckyNumber: 1,
                store: 'PNJ Phan Xích Long'
            }
        ];
        this.luckyUsersList = {
            luckyUsers: this.luckyUsers,
            name: '',
            id: '',
            createdAt: ''
        };
        this.generateRandomID();
    }

    addNewUserToTable() {
        this.currentEditingLuckyUserModel = {
            store: '',
            name: '',
            luckyNumber: 0
        };
        this.luckyUsers.push({});
        this.isCurrentEditingLuckyUserSaved = false;
    }

    generateRandomID() {
        this.luckyUsersList.id = uuidv4().replaceAll('-', '');
    }

    removeCurrentLuckyUserFromCreatingList(index: number) {
        this.confirmService.confirm({
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            message: 'Bạn có chắc là muốn xoá người tham dự này chứ?',
            rejectLabel: 'Huỷ',
            acceptLabel: 'Đồng ý',
            accept: () => {
                this.currentEditingLuckyUserModel = {
                    luckyNumber: undefined,
                    name: undefined,
                    store: undefined
                };
                if (this.deepEqual.deepEquals(this.luckyUsers[index], {})) {
                    this.isCurrentEditingLuckyUserSaved = true;
                }
                this.luckyUsers = this.luckyUsers.filter(u => !this.deepEqual.deepEquals(u, this.luckyUsers[index]));

            }
        });

    }

    finalizeAddingNewUser(): void {
        console.log(this.currentEditingLuckyUserModel);
        let flag = true;
        if (!this.luckyUsersTableValidator.validateLuckyNumber(this.currentEditingLuckyUserModel.luckyNumber)) {
            flag = false;
        }
        if (!this.luckyUsersTableValidator.validateLuckyUserName(this.currentEditingLuckyUserModel.name)) {
            flag = false;
        }
        if (!this.luckyUsersTableValidator.validateLuckyUserName(this.currentEditingLuckyUserModel.store)) {
            flag = false;
        }
        if (this.checkIfLuckyNumberExisted()) {
            flag = false;
            this.msgService.add({
                severity: 'error',
                summary: 'Lỗi khi thêm một người tham dự mới!',
                detail: 'Số may mắn tham dự không được trùng lặp với các số khác!'
            });
        }
        if (flag) {
            this.confirmService.confirm({
                icon: 'pi pi-exclamation-triangle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
                message: 'Bạn có chắc là muốn thêm người tham dự này chứ?',
                rejectLabel: 'Huỷ',
                acceptLabel: 'Đồng ý',
                acceptButtonStyleClass: 'p-button-success',
                rejectButtonStyleClass: 'p-button-danger',
                accept: () => {
                    this.luckyUsers.pop();
                    this.luckyUsers.push(this.currentEditingLuckyUserModel);
                    this.currentEditingLuckyUserModel = {
                        luckyNumber: undefined,
                        store: undefined,
                        name: undefined
                    };
                    this.isCurrentEditingLuckyUserSaved = true;
                }
            });
        }
    }

    checkIfLuckyNumberExisted(): boolean {
        let flag = false;
        this.luckyUsers.forEach(u => {
            if (u.luckyNumber === this.currentEditingLuckyUserModel.luckyNumber) {
                flag = true;
            }
        });
        return flag;
    }

    goToEditSelectedLuckyUserModal(rowIndex: number) {
        const selectedLuckyUser = this.luckyUsers[rowIndex];
        this.editLuckyUserModalComp.luckyNumber = selectedLuckyUser.luckyNumber;
        this.editLuckyUserModalComp.name = selectedLuckyUser.name;
        this.editLuckyUserModalComp.store = selectedLuckyUser.store;
        this.editLuckyUserModalComp._isEditingLuckyUserModalDisplayed = true;
        this.editLuckyUserModalComp.selectedLuckyUserModel = selectedLuckyUser;
        this.editLuckyUserModalComp.rowIndex = rowIndex;
        this.editLuckyUserModalComp.luckyUsers = this.luckyUsers;
    }

    closeUploadTableModal() {
        this.confirmService.confirm({
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            message: 'Bạn có chắc là muốn đóng cửa sổ khởi tạo danh sách người tham dự chứ?',
            rejectLabel: 'Huỷ',
            acceptLabel: 'Đồng ý',
            acceptButtonStyleClass: 'p-button-success',
            rejectButtonStyleClass: 'p-button-danger',
            accept: () => {
                this._isCreatingLuckyUsersTableDisplayed = false;
            }
        });
    }

    createNewLuckyUserList() {
        this.confirmService.confirm({
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            message: 'Bạn có chắc là muốn tạo mới danh sách người tham dự chứ?',
            rejectLabel: 'Huỷ',
            acceptLabel: 'Đồng ý',
            acceptButtonStyleClass: 'p-button-success',
            rejectButtonStyleClass: 'p-button-danger',
            accept: () => {
                this.luckyUsersList.createdAt = new Date().getTime().toString();
                this.luckyUsersService.addNewLuckyUsersList(this.luckyUsersList).then(() => {
                    this.showSuccessfullyUploadedLuckyUsersList();
                }).catch(() => {
                    this.showFailUploadedLuckyUsersList();
                });
                this._isCreatingLuckyUsersTableDisplayed = false;
            }
        });
    }

    showSuccessfullyUploadedLuckyUsersList(): void {
        this.msgService.add({
            severity: 'success',
            summary: 'Thành công tải lên máy chủ!',
            detail: 'Tải danh sách người tham dự lên máy chủ thành công!'
        });
    }

    showFailUploadedLuckyUsersList(): void {
        this.msgService.add({
            severity: 'error',
            summary: 'Thất bại khi tải lên máy chủ!',
            detail: 'Tải danh sách người tham dự lên máy chủ thất bại!'
        });
    }

    openHelperPage() {
        this.helpComp._isUploadLuckyUserTableHelpPageDisplayed = true;
    }

    exportToExcelFile() {
        this.confirmService.confirm({
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            message: 'Bạn có chắc là muốn xuất danh sách này thành tệp Excel chứ? Định dạng cuối cùng sẽ là XLSX',
            rejectLabel: 'Huỷ',
            acceptLabel: 'Đồng ý',
            acceptButtonStyleClass: 'p-button-success',
            rejectButtonStyleClass: 'p-button-danger',
            accept: () => {

            }
        });
    }
}
