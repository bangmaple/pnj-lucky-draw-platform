import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import LuckyUserModel from '../../../domain/LuckyUserModel';

@Component({
    selector: 'app-event-queue-view-lucky-users',
    templateUrl: './event-queue-view-lucky-users.component.html',
    styleUrls: ['./event-queue-view-lucky-users.component.scss']
})
export class EventQueueViewLuckyUsersComponent implements OnInit {
    ngOnInit(): void {
    }

}
