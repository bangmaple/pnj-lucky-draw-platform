import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    OnInit,
    ViewChildren
} from '@angular/core';
import LuckyUserModel from '../domain/LuckyUserModel';

import EventModel from '../domain/EventModel';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {EventsService} from '../services/events.service';
import {Observable} from 'rxjs';
import {StartLuckydrawService} from '../services/start-luckydraw.service';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {
    audio = new Audio();
    luckyUsers: LuckyUserModel[];
    currentEvent$: Observable<EventModel>;

    endVal: number;

    @ViewChildren('numm')
    randomizedNum: any[];

    luckyNumber: string;
    name: string;
    store: string;

    eventName = '';
    eventId = '';

    drawDuration = 10;


    hasAnimationStarted: boolean;
    hasAnimationCompleted: boolean;

    options: any = {
        duration: this.drawDuration,
        separator: '',
        startVal: 999999,
    };

    initData(eventId: string) {
        this.currentEvent$ = this.eventsService.findEventById(eventId);
        this.currentEvent$.subscribe(currentEvent => {
            this.eventName = currentEvent.eventName;
            this.drawDuration = currentEvent.eventDrawDuration;
            this.options.duration = this.drawDuration;
            this.luckyUsers = currentEvent.pendingLuckyUsers;
        });
    }

    constructor(@Inject(DOCUMENT) private readonly document: Document,
                private readonly route: ActivatedRoute,
                private readonly elRef: ElementRef,
                private readonly router: Router,
                private readonly eventsService: EventsService,
                private readonly startEventService: StartLuckydrawService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
        this.eventId = window.localStorage.getItem('eventId');
        if (this.eventId === null) {
            this.router.navigate(['/home']);
        } else {
            this.initData(this.eventId);
            if (!this.hasAnimationCompleted) {
                this.audio.src = './assets/xo-so.mp3';
                this.audio.loop = true;
                this.audio.load();
            }
        }
    }

    ngAfterViewChecked(): void {
        if (this.hasAnimationCompleted) {
            this.audio.pause();
            this.audio.src = './assets/clapping.mp3';
            this.audio.play();
        }
    }

    ngOnDestroy(): void {
        this.audio.muted = true;
        this.audio.pause();
    }

    ngOnInit(): void {
    }


    myFunction() {
        const luckyNumEl = document.getElementById('num');
        const luckyVal = luckyNumEl.innerHTML.trim();
        if (luckyVal.length + 1 === 6) {
            luckyNumEl.innerHTML = '0' + luckyNumEl.innerHTML;
        } else if (luckyVal.length + 2 === 6) {
            luckyNumEl.innerHTML = '00' + luckyNumEl.innerHTML;
        } else if (luckyVal.length + 3 === 6) {
            luckyNumEl.innerHTML = '000' + luckyNumEl.innerHTML;
        } else if (luckyVal.length + 4 === 6) {
            luckyNumEl.innerHTML = '0000' + luckyNumEl.innerHTML;
        } else if (luckyVal.length + 5 === 6) {
            luckyNumEl.innerHTML = '00000' + luckyNumEl.innerHTML;
        } else if (luckyVal.length + 6 === 6) {
            luckyNumEl.innerHTML = '000000' + luckyNumEl.innerHTML;
        }
        document.getElementById('card-1').innerHTML = luckyVal[0];
        document.getElementById('card-2').innerHTML = luckyVal[1];
        document.getElementById('card-3').innerHTML = luckyVal[2];
        document.getElementById('card-4').innerHTML = luckyVal[3];
        document.getElementById('card-5').innerHTML = luckyVal[4];
        document.getElementById('card-6').innerHTML = luckyVal[5];
    }


    doSomethingOnComplete() {
        this.hasAnimationCompleted = true;
    }

    start() {
        this.currentEvent$.subscribe(currentEvent => {
            const min = 0;
            const max = (this.luckyUsers.length) - 1;
            const randomInt = this.getRandomInt(min, max);
            this.luckyNumber = this.luckyUsers[randomInt].luckyNumber + '';
            this.name = this.luckyUsers[randomInt].name;
            this.store = this.luckyUsers[randomInt].store;
            this.endVal = this.luckyUsers[randomInt].luckyNumber;
            this.hasAnimationStarted = true;

            const winner: LuckyUserModel = {
                luckyNumber: parseInt(this.luckyNumber, 10),
                name: this.name,
                store: this.store
            };
            this.startEventService.saveEventWinnerByEventId(this.eventId, winner);
        });
    }


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngAfterViewInit(): void {
        this.audio.muted = false;
        this.audio.autoplay = true;
        this.audio.play();
    }


    navigateHome() {
        window.localStorage.removeItem('eventId');
        this.router.navigate(['/home']);
    }

    continueDrawing() {
        //   this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('/start');
        console.log('hi');
        /*  return;
          this.options.startVal = 999999;
          this.options.endVal = 999999;
          document.getElementById('num').innerHTML = '999999';
          this.hasAnimationCompleted = false;
          this.hasAnimationStarted = false;
          this.audio.src = './assets/xo-so.mp3';
          this.audio.load();*/
    }

    reloadPage() {
        window.location.reload();
    }
}
