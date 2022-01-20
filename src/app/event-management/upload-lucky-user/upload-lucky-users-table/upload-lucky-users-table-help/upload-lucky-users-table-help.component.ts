import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-upload-lucky-users-table-help',
    templateUrl: './upload-lucky-users-table-help.component.html',
    styleUrls: ['./upload-lucky-users-table-help.component.css']
})
export class UploadLuckyUsersTableHelpComponent implements OnInit {
    _isUploadLuckyUserTableHelpPageDisplayed = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    closeThisModal() {
        this._isUploadLuckyUserTableHelpPageDisplayed = false;
    }
}
