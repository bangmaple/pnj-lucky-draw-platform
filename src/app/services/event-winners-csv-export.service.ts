import {Injectable} from '@angular/core';
import {StartLuckydrawService} from './start-luckydraw.service';
import {MessageService} from 'primeng/api';
import * as ExcelJS from 'exceljs';
import * as FileSaver from 'file-saver';

@Injectable({
    providedIn: 'root'
})
export class EventWinnersCsvExportService {

    constructor(private readonly startEventsService: StartLuckydrawService,
                private readonly msgSerivce: MessageService) {
    }

    exportEventWinnerByEventIdToCSV(eventId: string) {
        this.startEventsService.findWinnersByEventId(eventId).subscribe(winners => {
            if (winners.length > 0) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet();
                const headers = ['Số may mắn', 'Tên người tham dự', 'Tên cửa hàng'];
                worksheet.addRow(headers);
                winners.forEach(winner => {
                    worksheet.addRow([winner.luckyNumber, winner.name, winner.store]);
                });
                workbook.xlsx.writeBuffer().then((dataBuffer) => {
                    const blob = new Blob([dataBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
                    FileSaver.saveAs(blob, 'event-winners-' + eventId + '.xlsx');
                });
            } else {
                this.msgSerivce.add({
                    severity: 'error',
                    summary: 'Lỗi khi tải xuống danh sách người chiến thắng',
                    detail: 'Vui lòng chơi sự kiện trước khi tải xuống'
                });
            }
        });
    }
}
