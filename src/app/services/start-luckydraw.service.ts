import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import LuckyUserModel from '../domain/LuckyUserModel';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StartLuckydrawService {

    constructor(private readonly firestore: AngularFirestore) {
    }

    saveEventWinnerByEventId(eventId: string, winnerLuckyUser: LuckyUserModel) {
        this.firestore.collection('winners')
            .doc('winner').collection(eventId).add(winnerLuckyUser);
    }

    findWinnersByEventId(eventId: string): Observable<LuckyUserModel[]> {
        return this.firestore.collection<LuckyUserModel>('winners')
            .doc('winner').collection(eventId).valueChanges();
    }
}
