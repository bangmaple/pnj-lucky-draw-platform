import {Injectable} from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class UploadLuckyUsersExcelConfirmService {

    constructor(private readonly confirmService: ConfirmationService) {
    }


    fireLeaveUploadLuckyUsersListExcel(acceptAction: () => void): void {
        this.confirmService.confirm({
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            message: 'Bạn có chắc là muốn đóng cửa sổ khởi tạo danh sách người tham dự chứ?',
            rejectLabel: 'Huỷ',
            acceptLabel: 'Đồng ý',
            acceptButtonStyleClass: 'p-button-success',
            rejectButtonStyleClass: 'p-button-danger',
            accept: acceptAction
        });
    }
}
