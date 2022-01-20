import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import LuckyUserModel from '../domain/LuckyUserModel';

@Injectable({
    providedIn: 'root'
})
export class LuckyUsersStoreService {
    public static INSTANCE: LuckyUsersStoreService;

    luckyUsers$: BehaviorSubject<LuckyUserModel[]> = new BehaviorSubject([]);

    constructor() {


    }

    public static getInstance(): LuckyUsersStoreService {
        if (LuckyUsersStoreService.INSTANCE === undefined) {
            LuckyUsersStoreService.INSTANCE = new LuckyUsersStoreService();
        }
        return LuckyUsersStoreService.INSTANCE;
    }


}
