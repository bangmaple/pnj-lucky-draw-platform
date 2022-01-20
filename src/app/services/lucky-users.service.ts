import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import LuckyUserList from '../domain/LuckyUserListModel';
import {AngularFirestore} from '@angular/fire/firestore';
import LuckyUserModel from '../domain/LuckyUserModel';
import {DateTimeFormatterLocale, DateTimeFormatterOption} from '../utils/date-time-formatter';
import * as ExcelJS from 'exceljs';

@Injectable({
    providedIn: 'root',
})
export class LuckyUsersService {

    luckyUsers$: Observable<LuckyUserList[]>;

    creatingLuckyUsers$: BehaviorSubject<LuckyUserModel[]> = new BehaviorSubject<LuckyUserModel[]>([]);

    selectedLuckyUser$: BehaviorSubject<LuckyUserList> =
        new BehaviorSubject<LuckyUserList>(new LuckyUserList());

    constructor(private readonly firestore: AngularFirestore) {
        this.luckyUsers$ = this.firestore.collection<LuckyUserList[]>('lucky-draw')
            .doc('luckyUsersList').valueChanges();
    }

    addNewLuckyUsersList(luckyUsersList: LuckyUserList): Promise<void> {
        const luckyUserListDoc = this.firestore.collection<LuckyUserList>('luckyUsersList')
            .doc(luckyUsersList.id).ref;
        return luckyUserListDoc.set({
            id: luckyUsersList.id,
            name: luckyUsersList.name,
            createdAt: luckyUsersList.createdAt,
            luckyUsers: luckyUsersList.luckyUsers
        });
    }

    getLuckyUsersListById(id: string): Observable<LuckyUserList> {
        return this.firestore.collection<LuckyUserList>('luckyUsersList').doc(id).valueChanges();
    }

    searchByLikeName(searchName: string): Observable<LuckyUserList[]> {
        // list.subscribe(console.warn);
        return this.firestore.collection<LuckyUserList>('luckyUsersList').valueChanges();
    }

    removeDuplicatedLuckyUsers(luckyUsers: LuckyUserModel[]): LuckyUserModel[] {
        const map = new Map();
        luckyUsers.forEach(luckyUser => {
            if (!map.has(luckyUser.luckyNumber)) {
                map.set(luckyUser.luckyNumber, luckyUser);
            }
        });
        return Array.from(map.values());
    }

    generateRandomListName(): string {
        return `Danh sách ${new Intl.DateTimeFormat(DateTimeFormatterLocale, DateTimeFormatterOption).format(new Date())}`;
    }

    readExcelXLSXFile(buff: string | ArrayBuffer, $event: any) {
        const wb = new ExcelJS.Workbook();
        wb.xlsx.load(<ArrayBuffer>buff).then(workbook => {
            workbook.eachSheet((sheet, id) => {
                sheet.eachRow((row, rowIndex) => {
                    if (rowIndex > 1) {
                        this.creatingLuckyUsers$.value.push({
                            luckyNumber: parseInt(row.values[1], 10),
                            name: row.values[2],
                            store: row.values[3]
                        });
                    }

                });
            });
           // this.msgService.fireSuccessfullyUploadedThenFillMissingFields();
        }).catch(() => {
          //  this.msgService.fireInvalidExcelXSLXFile();
        }).finally(() => {
            (<HTMLInputElement>$event.target).value = '';
        });
    }

    readUploadedLuckyUserFile( $event: any): void {
        const file = (<HTMLInputElement>$event.target).files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
         reader.onload = () => {
            this.readExcelXLSXFile(reader.result, $event);
        };
    }

    uploadFileListener($event: any) {
        this.readUploadedLuckyUserFile($event);
    }
}
