import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import EventModel from '../domain/EventModel';
import {map} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    events$: Observable<EventModel[]> = new BehaviorSubject([]);

    constructor(private readonly firestore: AngularFirestore) {
    }

    createAnEvent(eventModel: EventModel): Promise<void> {
        return this.firestore.collection('events')
            .doc(eventModel.eventId)
            .set(eventModel);
    }

    findEventById(id: string): Observable<EventModel> {
        return this.firestore.collection<EventModel>('events').doc(id).valueChanges();
    }

    findAllEvents(): Observable<EventModel[]> {
        return this.firestore.collection<EventModel>('events').valueChanges();
    }

    countAllEvents(): Observable<number> {
        return this.firestore.collection<EventModel>('events')
            .valueChanges().pipe(map(e => e.length));
    }

    deleteAnEvent(eventId: string) {
        return this.firestore.collection<EventModel>('events').doc(eventId).delete();
    }

    findEventsByLikeName(search: string): Observable<EventModel[]> {
        return this.firestore.collection<EventModel>('events', ref =>
            ref.orderBy('eventName')
                .startAt(search)
                .endAt(search + '\uf8ff')).valueChanges();
    }

}
