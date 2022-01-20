import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class UploadLuckyUsersTableValidatorService {
    private static MIN_NUMBER = 1;
    private static MAX_NUMBER = 999_999;
    private static NAME_MAX_LENGTH = 100;
    private static STORE_MAX_LENGTH = 200;

    UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR = 'Lỗi khi thao tác với người tham dự hiện tại!';
    UPLOAD_LUCKY_USERS_TABLE_NUMBER_BLANK = 'Vui lòng không được để trống số may mắn!';
    UPLOAD_LUCKY_USERS_TABLE_NUMBER_INVALID = 'Số may mắn bạn nhập không hợp lệ, số phải lớn hơn 0!';
    UPLOAD_LUCKY_USERS_TABLE_MIN_NUMBER = 'Vui lòng nhập số may mắn lớn hơn 0.';
    UPLOAD_LUCKY_USERS_TABLE_MAX_NUMBER = 'Vui lòng nhập số may mắn bé hơn hoặc bằng 999999';
    UPLOAD_LUCKY_USERS_TABLE_NAME_BLANK = 'Vui lòng không được để trống tên người tham dự.';
    UPLOAD_LUCKY_USERS_TABLE_STORE_BLANK = 'Vui lòng không được để trống tên cửa hàng.';
    UPLOAD_LUCKY_USERS_TABLE_NAME_EXCEED = `Tên người tham dự không được vượt quá ${UploadLuckyUsersTableValidatorService.NAME_MAX_LENGTH} kí tự.`;
    UPLOAD_LUCKY_USERS_TABLE_STORE_EXCEED = `Tên cửa hàng không được vượt quá ${UploadLuckyUsersTableValidatorService.STORE_MAX_LENGTH} kí tự.`;

    constructor(private readonly msgService: MessageService) {
    }

    validateLuckyUserStore(store: string): boolean {
        if (store === undefined || !store || store.trim().length < 1) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_STORE_BLANK
            });
            return false;
        }
        if (store.trim().length > UploadLuckyUsersTableValidatorService.STORE_MAX_LENGTH) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_STORE_EXCEED
            });
            return false;
        }
        return true;
    }


    validateLuckyUserName(name: string): boolean {
        if (name === undefined || !name || name.trim().length < 1) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_NAME_BLANK
            });
            return false;
        }
        if (name.trim().length > UploadLuckyUsersTableValidatorService.NAME_MAX_LENGTH) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_NAME_EXCEED
            });
            return false;
        }
        return true;
    }

    validateLuckyNumber(luckyNumber: number): boolean {
        if (luckyNumber === undefined) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_NUMBER_BLANK
            });
            return false;
        }
        if (!luckyNumber) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_NUMBER_INVALID
            });
            return false;
        }
        if (isNaN(luckyNumber)) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_NUMBER_INVALID
            });
            return false;
        }
        if (luckyNumber < UploadLuckyUsersTableValidatorService.MIN_NUMBER) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_MIN_NUMBER
            });
            return false;
        }
        if (luckyNumber > UploadLuckyUsersTableValidatorService.MAX_NUMBER) {
            this.msgService.add({
                severity: 'error',
                summary: this.UPLOAD_LUCKY_USERS_TABLE_VALIDATOR_ERROR,
                detail: this.UPLOAD_LUCKY_USERS_TABLE_MAX_NUMBER
            });
            return false;
        }
        return true;
    }
}
