import {Injectable} from '@angular/core';
import {
    ERROR_BLANK_EVENT_NAME,
    ERROR_EVENT_DURATION_NOT_VALIDATED,
    ERROR_PLEASE_SELECT_LUCKY_USERS
} from '../event-management/messageServiceErrors';
import {MessageService} from 'primeng/api';
import LuckyUserModel from '../domain/LuckyUserModel';

@Injectable({
    providedIn: 'root'
})
export class EventsValidatorService {

    constructor(private readonly msgService: MessageService) {
    }

    public validateEvent(eventName: string, drawDuration: number, currentSelectedLuckyUsers: LuckyUserModel[]): boolean {
        if (eventName.trim().length < 1) {
            this.msgService.add(ERROR_BLANK_EVENT_NAME);
            return false;
        }
        if (drawDuration < 1 || drawDuration > 100) {
            this.msgService.add(ERROR_EVENT_DURATION_NOT_VALIDATED);
            return false;
        }
        if (currentSelectedLuckyUsers.length < 1) {
            this.msgService.add(ERROR_PLEASE_SELECT_LUCKY_USERS);
            return false;
        }
        return true;
    }
}
