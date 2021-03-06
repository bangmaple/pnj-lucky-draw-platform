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
                name: 'Nguy???n V??n A',
                luckyNumber: 1,
                store: 'PNJ Phan X??ch Long'
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
            message: 'B???n c?? ch???c l?? mu???n xo?? ng?????i tham d??? n??y ch????',
            rejectLabel: 'Hu???',
            acceptLabel: '?????ng ??',
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
                summary: 'L???i khi th??m m???t ng?????i tham d??? m???i!',
                detail: 'S??? may m???n tham d??? kh??ng ???????c tr??ng l???p v???i c??c s??? kh??c!'
            });
        }
        if (flag) {
            this.confirmService.confirm({
                icon: 'pi pi-exclamation-triangle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
                message: 'B???n c?? ch???c l?? mu???n th??m ng?????i tham d??? n??y ch????',
                rejectLabel: 'Hu???',
                acceptLabel: '?????ng ??',
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
            message: 'B???n c?? ch???c l?? mu???n ????ng c???a s??? kh???i t???o danh s??ch ng?????i tham d??? ch????',
            rejectLabel: 'Hu???',
            acceptLabel: '?????ng ??',
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
            message: 'B???n c?? ch???c l?? mu???n t???o m???i danh s??ch ng?????i tham d??? ch????',
            rejectLabel: 'Hu???',
            acceptLabel: '?????ng ??',
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
            summary: 'Th??nh c??ng t???i l??n m??y ch???!',
            detail: 'T???i danh s??ch ng?????i tham d??? l??n m??y ch??? th??nh c??ng!'
        });
    }

    showFailUploadedLuckyUsersList(): void {
        this.msgService.add({
            severity: 'error',
            summary: 'Th???t b???i khi t???i l??n m??y ch???!',
            detail: 'T???i danh s??ch ng?????i tham d??? l??n m??y ch??? th???t b???i!'
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
            message: 'B???n c?? ch???c l?? mu???n xu???t danh s??ch n??y th??nh t???p Excel ch???? ?????nh d???ng cu???i c??ng s??? l?? XLSX',
            rejectLabel: 'Hu???',
            acceptLabel: '?????ng ??',
            acceptButtonStyleClass: 'p-button-success',
            rejectButtonStyleClass: 'p-button-danger',
            accept: () => {

            }
        });
    }
}
