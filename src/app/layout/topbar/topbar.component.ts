import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {TopbarItems} from './TopbarItems';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    items: MenuItem[];
    displayCreditModal = false;

    constructor() {
    }

    ngOnInit(): void {
        this.items = TopbarItems(this);
    }

    showInformation() {
        this.displayCreditModal = true;
    }
}
