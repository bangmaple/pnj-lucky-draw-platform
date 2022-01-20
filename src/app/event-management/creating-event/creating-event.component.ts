import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {EventsService} from '../../services/events.service';
import {BehaviorSubject, Observable} from 'rxjs';
import LuckyUserModel from '../../domain/LuckyUserModel';
import LuckyUserList from '../../domain/LuckyUserListModel';
import {LuckyUsersService} from '../../services/lucky-users.service';
import {EventsValidatorService} from '../../validators/events-validator.service';
import {v4 as uuidv4} from 'uuid';
import {CreateEventViewLuckyUsersComponent} from './create-event-view-lucky-users/create-event-view-lucky-users.component';

@Component({
    selector: 'app-creating-event',
    templateUrl: './creating-event.component.html',
    styleUrls: ['./creating-event.component.scss'],
})
export class CreatingEventComponent implements OnInit {
    drawDuration = 10;
    eventName = '';

    luckyUsers$: Observable<LuckyUserList[]>;

    searchName = '';
    eventLuckyUserListName = '';

    currentSelectedLuckyUsers$: BehaviorSubject<LuckyUserModel[]> = new BehaviorSubject<LuckyUserModel[]>([]);


    _isCreateEventModalDisplayed: boolean;
    _isLuckyUserListSelected = false;
    _isViewLuckyUsersModalDisplayed = false;


    @ViewChild(CreateEventViewLuckyUsersComponent)
    private viewLuckyUsersComp: CreateEventViewLuckyUsersComponent;

    constructor(private readonly primeNgConfig: PrimeNGConfig,
                private readonly eventsService: EventsService,
                private readonly luckyUsersService: LuckyUsersService,
                private readonly eventsValidatorService: EventsValidatorService,
                private readonly msgService: MessageService) {
    }

    ngOnInit(): void {
        this.luckyUsers$ = this.luckyUsersService.searchByLikeName(this.searchName);

    }

    createAEvent() {
        this.currentSelectedLuckyUsers$.subscribe(currentSelectedLuckyUsers => {
            if (!this.eventsValidatorService
                .validateEvent(this.eventName, this.drawDuration, this.currentSelectedLuckyUsers$.value)) {
                return;
            }
            if (currentSelectedLuckyUsers.length < 3) {
                this.msgService.add({
                    severity: 'error',
                    summary: 'Lỗi khi tạo sự kiện mới',
                    detail: 'Số lượng người tham dự phải lớn hơn 2.'
                });
            } else if (currentSelectedLuckyUsers.length >= 3) {
                this._isCreateEventModalDisplayed = false;
                this.eventsService.createAnEvent({
                    eventId: uuidv4().toString().replaceAll('-', ''),
                    eventName: this.eventName,
                    eventDrawDuration: this.drawDuration,
                    pendingLuckyUsers: currentSelectedLuckyUsers,
                    eventLuckyUserListName: this.eventLuckyUserListName
                }).then(() => {
                    this.showSuccessfullyCreatedEvent();
                    this._isLuckyUserListSelected = false;

                }).catch(() => {
                    this.showFailCreatedEvent();
                });
                // this.msgService.add(SUCCESS_CREATED_AN_EVENT);
                currentSelectedLuckyUsers = [];
                this.eventName = '';
                this.drawDuration = 10;
            }
        });
    }

    showSuccessfullyCreatedEvent(): void {
        this.msgService.add({
            severity: 'success',
            summary: 'Thành công tải lên máy chủ!',
            detail: 'Tạo dữ liệu sự kiện trên máy chủ thành công!'
        });
    }

    showFailCreatedEvent(): void {
        this.msgService.add({
            severity: 'error',
            summary: 'Thất bại khi tải lên máy chủ!',
            detail: 'Tạo dữ liệu sự kiện trên máy chủ thất bại!'
        });
    }


    removeSelectedLuckyUserList(): void {
        this.luckyUsersService.selectedLuckyUser$.next(new LuckyUserList());
        this._isLuckyUserListSelected = false;
    }

    selectLuckyUserList(luckyUserListId: string): void {
        this.luckyUsersService.getLuckyUsersListById(luckyUserListId).subscribe(currentLuckyUserList => {
            this.eventLuckyUserListName = currentLuckyUserList.name;
            this.luckyUsersService.selectedLuckyUser$.next(currentLuckyUserList);
            this.currentSelectedLuckyUsers$.next(currentLuckyUserList.luckyUsers);
            this._isLuckyUserListSelected = true;
        });
    }


    viewLuckyUsersInList(id: string): void {
        this.viewLuckyUsersComp.luckyUsers$ = this.luckyUsersService.getLuckyUsersListById(id);
        this.viewLuckyUsersComp._isViewLuckyUsersModalDisplayed = true;
    }

    getLuckyUsersListByName() {
        this.luckyUsers$ = this.luckyUsersService.searchByLikeName(this.searchName);
    }

}
