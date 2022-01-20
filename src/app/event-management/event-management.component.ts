import {Component, OnInit, ViewChild} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {UploadLuckyUserComponent} from './upload-lucky-user/upload-lucky-user.component';
import {EventQueueComponent} from './event-queue/event-queue.component';
import {CreatingEventComponent} from './creating-event/creating-event.component';
import {EventsValidatorService} from '../validators/events-validator.service';

@Component({
    selector: 'app-event-management',
    templateUrl: './event-management.component.html',
    styleUrls: ['./event-management.component.scss'],
    providers: [EventsValidatorService]
})
export class EventManagementComponent implements OnInit {

    @ViewChild(UploadLuckyUserComponent)
    uploadLuckyUserComp: UploadLuckyUserComponent;

    @ViewChild(EventQueueComponent)
    eventQueueComp: EventQueueComponent;

    @ViewChild(CreatingEventComponent)
    createEventComp: CreatingEventComponent;

    constructor(private readonly primeNGConfig: PrimeNGConfig) {
        this.primeNGConfig.ripple = true;
    }

    ngOnInit(): void {
    }

    goToEventsQueueList() {
        this.eventQueueComp._displayStartingEventModal = true;
    }

    createAnEventModal() {
        this.createEventComp._isCreateEventModalDisplayed = true;
    }

    showCreatingLuckyUsersListModal() {
        this.uploadLuckyUserComp._isUploadingUserModalDisplay = true;
    }
}
