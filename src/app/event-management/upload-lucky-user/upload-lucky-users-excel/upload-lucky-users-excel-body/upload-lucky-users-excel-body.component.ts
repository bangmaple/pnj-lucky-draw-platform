import {Component, OnInit} from '@angular/core';
import {LuckyUsersService} from '../../../../services/lucky-users.service';
import {BehaviorSubject} from 'rxjs';
import LuckyUserModel from '../../../../domain/LuckyUserModel';

@Component({
    selector: 'app-upload-lucky-users-excel-body',
    templateUrl: './upload-lucky-users-excel-body.component.html',
    styleUrls: ['./upload-lucky-users-excel-body.component.scss']
})
export class UploadLuckyUsersExcelBodyComponent implements OnInit {

    _isLuckyUsersDataTableIsProcessing = false;
    _isLuckyUsersDataTableIsLoaded = false;

    constructor(private readonly luckyUsersService: LuckyUsersService) {
    }

    ngOnInit(): void {
    }

    getTemporaryLuckyUsers(): BehaviorSubject<LuckyUserModel[]> {
        return this.luckyUsersService.creatingLuckyUsers$;
    }
}
