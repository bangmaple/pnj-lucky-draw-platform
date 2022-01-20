import {Component, OnInit} from '@angular/core';
import LuckyUserModel from '../../../../domain/LuckyUserModel';
import {ConfirmationService, MessageService} from 'primeng/api';
import {UploadLuckyUsersTableValidatorService} from '../../../../validators/upload-lucky-users-table-validator.service';

@Component({
    selector: 'app-edit-lucky-user-modal',
    templateUrl: './edit-lucky-user-modal.component.html',
    styleUrls: ['./edit-lucky-user-modal.component.css']
})
export class EditLuckyUserModalComponent implements OnInit {
    _isEditingLuckyUserModalDisplayed = false;

    selectedLuckyUserModel: LuckyUserModel = {};

    luckyNumber: number;
    name: string;
    store: string;

    luckyUsers: LuckyUserModel[];
    rowIndex: number;

    constructor(private readonly confirmService: ConfirmationService,
                private readonly msgService: MessageService,
                private readonly luckyUserValidator: UploadLuckyUsersTableValidatorService) {

    }

    ngOnInit(): void {
    }

    checkIfExistedLuckyNumber() {
        let flag = false;
        this.luckyUsers.forEach(u => {
            if (this.luckyUsers[this.rowIndex].luckyNumber !== this.luckyNumber) {
                if (this.luckyNumber === u.luckyNumber) {
                    flag = true;
                }
            }
        });
        return flag;
    }

    saveChangeCurrentLuckyUser() {
        let flag = true;
        if (!this.luckyUserValidator.validateLuckyNumber(this.luckyNumber)) {
            flag = false;
        }
        if (this.checkIfExistedLuckyNumber()) {
            this.msgService.add({
                severity: 'error',
                summary: 'Lỗi khi thao tác thông tin người tham dự',
                detail: 'Số may mắn không được trùng với các số khác'
            });
            flag = false;
        }
        if (!this.luckyUserValidator.validateLuckyUserName(this.name)) {
            flag = false;
        }

        if (!this.luckyUserValidator.validateLuckyUserStore(this.store)) {
            flag = false;
        }
        if (flag) {
            this.confirmService.confirm({
                icon: 'pi pi-exclamation-triangle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
                message: 'Bạn có chắc là muốn lưu thông tin người tham dự này chứ?',
                rejectLabel: 'Huỷ',
                acceptLabel: 'Đồng ý',
                acceptButtonStyleClass: 'p-button-success',
                rejectButtonStyleClass: 'p-button-danger',
                accept: () => {
                    this.selectedLuckyUserModel.luckyNumber = this.luckyNumber;
                    this.selectedLuckyUserModel.name = this.name;
                    this.selectedLuckyUserModel.store = this.store;
                    this._isEditingLuckyUserModalDisplayed = false;
                }
            });
        }
    }

    closeEditModal() {
        this._isEditingLuckyUserModalDisplayed = false;
    }
}
