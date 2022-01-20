import {Injectable} from '@angular/core';
import * as FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';

@Injectable({
    providedIn: 'root'
})
export class ExcelService {
    public static EXCEL_XLSX_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    public static EXCEL_XLSX_TYPE_EXSTENSION = '.xlsx';
    public static EXCEL_EXPORT_TEMPLATE_NAME = 'lucky-users-template';

    constructor() {
    }

    public exportLuckyUsersXLSXTemplate(): void {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet();
        const headers = ['Số may mắn', 'Tên người tham dự', 'Tên cửa hàng'];
        worksheet.addRow(headers);
        worksheet.addRow(['1', 'Nguyễn Văn A', 'Cửa hàng A']);
        worksheet.addRow(['2', 'Nguyễn Thị B', 'Cửa hàng C']);
        worksheet.addRow(['5', 'Đình Công C', 'Cửa hàng A']);
        worksheet.addRow(['4', 'Phạm Bích D', 'Cửa hàng E']);
        worksheet.addRow(['3', 'Thái Văn E', 'Cửa hàng B']);
        workbook.xlsx.writeBuffer().then((dataBuffer) => {
            const blob = new Blob([dataBuffer], {type: ExcelService.EXCEL_XLSX_TYPE});
            FileSaver.saveAs(blob, ExcelService.EXCEL_EXPORT_TEMPLATE_NAME + ExcelService.EXCEL_XLSX_TYPE_EXSTENSION);
        });
    }

}
