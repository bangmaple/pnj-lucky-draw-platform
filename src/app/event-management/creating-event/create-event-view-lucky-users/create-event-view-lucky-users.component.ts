import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import LuckyUserModel from '../../../domain/LuckyUserModel';
import LuckyUserList from '../../../domain/LuckyUserListModel';

@Component({
  selector: 'app-create-event-view-lucky-users',
  templateUrl: './create-event-view-lucky-users.component.html',
  styleUrls: ['./create-event-view-lucky-users.component.scss']
})
export class CreateEventViewLuckyUsersComponent implements OnInit {
  _isViewLuckyUsersModalDisplayed = false;

  luckyUsers$ = new Observable<LuckyUserList>();

  constructor() {
  }

  ngOnInit(): void {
  }


}
