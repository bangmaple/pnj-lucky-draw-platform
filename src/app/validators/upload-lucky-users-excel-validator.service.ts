import {Injectable} from '@angular/core';
import {
    ERROR_NOT_UPLOADED_LUCKY_USERS_LIST,
    ERROR_NOT_VALIDATED_LUCKY_USERS_LIST_NAME
} from '../event-management/upload-lucky-user/messagesServiceErrors';
import {MessageService} from 'primeng/api';
import LuckyUserModel from '../domain/LuckyUserModel';

@Injectable({
    providedIn: 'root'
})
export class UploadLuckyUsersExcelValidatorService {

    constructor(private readonly msgService: MessageService) {
    }

    public validateLuckyUsersExcelList(luckyUsers: LuckyUserModel[], luckyUserListName: string): boolean {
        let flag = true;
        if (luckyUsers.length < 1) {
            this.msgService.add(ERROR_NOT_UPLOADED_LUCKY_USERS_LIST);
            flag = false;

        }
        if (luckyUserListName.trim().length < 1) {
            this.msgService.add(ERROR_NOT_VALIDATED_LUCKY_USERS_LIST_NAME);
            flag = false;
        }
        return flag;
    }
}
