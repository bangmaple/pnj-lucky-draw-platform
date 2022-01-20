import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StartComponent} from './start.component';
import {ButtonModule} from 'primeng/button';
import {CountUpModule} from 'ngx-countup';
import {StartRoutingModule} from './start-routing.module';
import {FireworkComponent} from '../layout/firework/firework.component';
import { CardsComponent } from './cards/cards.component';
import { IneventNavigatorComponent } from './inevent-navigator/inevent-navigator.component';
import {NgxMutationObserverModule} from 'ngx-mutation-observer';


@NgModule({
  declarations: [StartComponent, FireworkComponent, CardsComponent, IneventNavigatorComponent],
    imports: [
        CommonModule,
        StartRoutingModule,
        ButtonModule,
        CountUpModule,
        NgxMutationObserverModule,
    ],
})
export class StartModule { }
