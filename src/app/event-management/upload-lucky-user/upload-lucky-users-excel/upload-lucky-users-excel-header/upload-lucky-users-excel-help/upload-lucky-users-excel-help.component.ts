import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-lucky-users-excel-help',
  templateUrl: './upload-lucky-users-excel-help.component.html',
  styleUrls: ['./upload-lucky-users-excel-help.component.scss']
})
export class UploadLuckyUsersExcelHelpComponent implements OnInit {
  _isUploadLuckyUserExcelHelpPageDisplayed = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  closeThisModal() {
    this._isUploadLuckyUserExcelHelpPageDisplayed = false;
  }
}
