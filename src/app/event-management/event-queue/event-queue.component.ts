import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';
import {Router} from '@angular/router';
import {EventWinnersCsvExportService} from '../../services/event-winners-csv-export.service';
import {Observable} from 'rxjs';
import EventModel from '../../domain/EventModel';
import {EventsService} from '../../services/events.service';
import {map} from 'rxjs/operators';
import {StartLuckydrawService} from '../../services/start-luckydraw.service';

@Component({
    selector: 'app-event-queue',
    templateUrl: './event-queue.component.html',
    styleUrls: ['./event-queue.component.scss'],
    providers: [EventWinnersCsvExportService, ConfirmationService],
})
export class EventQueueComponent implements OnInit {

    events$: Observable<EventModel[]>;

    _displayStartingEventModal = false;
    _isEventsQueueLoading = true;
    searchName = '';

    constructor(private readonly msgService: MessageService,
                private readonly confirmService: ConfirmationService,
                private readonly router: Router,
                private readonly eventWinnersCSVExportService: EventWinnersCsvExportService,
                private readonly primeNgConfig: PrimeNGConfig,
                private readonly eventsService: EventsService,
                private readonly startEventsService: StartLuckydrawService) {
        this.primeNgConfig.ripple = true;

    }

    ngOnInit(): void {
        this.events$ = this.eventsService.findAllEvents();
        this.events$.subscribe(e => {
            this._isEventsQueueLoading = false;
        });
    }

    deleteAnEvent(eventId: string) {
        this.confirmService.confirm({
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            message: 'Bạn có chắc là muốn xoá sự kiện này chứ?',
            rejectLabel: 'Huỷ',
            acceptLabel: 'Đồng ý',
            acceptButtonStyleClass: 'p-button-success',
            rejectButtonStyleClass: 'p-button-danger',
            accept: () => {

                this.eventsService.deleteAnEvent(eventId).then(() => {
                    this.msgService.add({
                        severity: 'success',
                        summary: 'Thành công',
                        detail: 'Thành công trong việc xoá sự kiện này!'
                    });
                }).catch(() => {
                    this.msgService.add({
                        severity: 'error',
                        summary: 'Thất bại',
                        detail: 'Thất bại khi xoá sự kiện này!'
                    });
                });
            }
        });
        //  this.events = JSON.parse(window.localStorage.getItem('events')) ?? [];
        //  this.events = this.events.filter((e) => e.eventId !== eventId);
        //  window.localStorage.setItem('events', JSON.stringify(this.events));
        //  if (this.events.length === 0) {
        //      this.displayStartingEventModal = false;
        //       this.msgService.add(INFO_DELETED_ALL_EVENT);
        //       return;
        //    }
    }

    goToEventLuckyDraw(eventId: string) {
        console.log(eventId);
        window.localStorage.setItem('eventId', eventId);
        this.router.navigate(['/start']);
    }

    downloadEventResult(eventId: string) {
        this.eventWinnersCSVExportService.exportEventWinnerByEventIdToCSV(eventId);
        // this.startEventService.findWinnersByEventId(eventId).subscribe(console.log);
    }


    isThisEventHasWinner(eventId: string): Observable<boolean> {
        return this.startEventsService.findWinnersByEventId(eventId).pipe(map(winners => {
            return winners.length > 0;
        }));
    }

    searchEventsByLikeName(): void {
        this._isEventsQueueLoading = true;
        if (this.searchName.trim().length < 1) {
            this.events$ = this.eventsService.findAllEvents();
        } else {
            this.events$ = this.eventsService.findEventsByLikeName(this.searchName);
        }
        this.events$.subscribe(e => {this._isEventsQueueLoading = false;});
    }
}
