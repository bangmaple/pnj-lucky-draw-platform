import {Component, ElementRef, OnInit, Optional} from '@angular/core';
import {LuckyUsersService} from '../../../../services/lucky-users.service';
import {ExcelService} from '../../../../services/excel.service';
import {UploadLuckyUsersExcelComponent} from '../upload-lucky-users-excel.component';

@Component({
    selector: 'app-upload-lucky-users-excel-header',
    templateUrl: './upload-lucky-users-excel-header.component.html',
    styleUrls: ['./upload-lucky-users-excel-header.component.scss']
})
export class UploadLuckyUsersExcelHeaderComponent implements OnInit {

    isLuckyUsersDataAppendable = false;

    luckyUserListName = '';

    constructor(private readonly luckyUsersService: LuckyUsersService,
                private readonly excelService: ExcelService,
                private readonly elRef: ElementRef,
                @Optional() private _parentComp: UploadLuckyUsersExcelComponent) {
    }

    ngOnInit(): void {

    }

    generateRandomLuckyUsersListName() {
        this.luckyUserListName = this.luckyUsersService.generateRandomListName();
    }

    downloadSampleCSVFile(): void {
        this.excelService.exportLuckyUsersXLSXTemplate();
    }

    uploadLuckyUsers(): void {
        this._parentComp.receiveUploadingFile();
    }


}
