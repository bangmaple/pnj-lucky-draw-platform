import {Component, OnInit, ViewChild} from '@angular/core';
import {StartComponent} from '../start.component';

@Component({
    selector: 'app-inevent-navigator',
    templateUrl: './inevent-navigator.component.html',
    styleUrls: ['./inevent-navigator.component.scss']
})
export class IneventNavigatorComponent implements OnInit {

    constructor(public startComponent: StartComponent) {
    }

    ngOnInit(): void {
    }

}
