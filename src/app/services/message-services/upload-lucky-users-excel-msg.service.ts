import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {
    FAILED_UPLOAD_LUCKY_USERS_LIST_MESSAGE,
    INVALID_UPLOAD_EXCEL_XLSX_FILE,
    SUCCESSFULLY_UPLOADED_LUCKY_USERS_LIST_MESSAGE,
    SUCCESSFULLY_UPLOADED_THEN_FILL_MISSING_FIELDS
} from './messages';

@Injectable({
    providedIn: 'root'
})
export class UploadLuckyUsersExcelMsgService {

    constructor(private readonly msgService: MessageService) {
    }

    fireSuccessfullyUploaded(): void {
        this.msgService.add(SUCCESSFULLY_UPLOADED_LUCKY_USERS_LIST_MESSAGE);
    }

    fireFailedUpload(): void {
        this.msgService.add(FAILED_UPLOAD_LUCKY_USERS_LIST_MESSAGE);
    }

    fireInvalidExcelXSLXFile(): void {
        this.msgService.add(INVALID_UPLOAD_EXCEL_XLSX_FILE);
    }

    fireSuccessfullyUploadedThenFillMissingFields(): void {
        this.msgService.add(SUCCESSFULLY_UPLOADED_THEN_FILL_MISSING_FIELDS);
    }
}
