import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventManagementRoutingModule} from './event-management-routing.module';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {EventManagementComponent} from './event-management.component';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {UploadLuckyUserComponent} from './upload-lucky-user/upload-lucky-user.component';
import {TooltipModule} from 'primeng/tooltip';
import {EventQueueComponent} from './event-queue/event-queue.component';
import {CreatingEventComponent} from './creating-event/creating-event.component';
import {ReactiveComponentModule} from '@ngrx/component';
import {SkeletonModule} from 'primeng/skeleton';
import { EventQueueSkeletonComponent } from './event-queue/event-queue-skeleton/event-queue-skeleton.component';
import { UploadLuckyUsersTableComponent } from './upload-lucky-user/upload-lucky-users-table/upload-lucky-users-table.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { EditLuckyUserModalComponent } from './upload-lucky-user/upload-lucky-users-table/edit-lucky-user-modal/edit-lucky-user-modal.component';
import { UploadLuckyUsersExcelComponent } from './upload-lucky-user/upload-lucky-users-excel/upload-lucky-users-excel.component';
import { UploadLuckyUsersTableHelpComponent } from './upload-lucky-user/upload-lucky-users-table/upload-lucky-users-table-help/upload-lucky-users-table-help.component';
import { UploadLuckyUsersExcelHelpComponent } from './upload-lucky-user/upload-lucky-users-excel/upload-lucky-users-excel-header/upload-lucky-users-excel-help/upload-lucky-users-excel-help.component';
import { EventQueueViewLuckyUsersComponent } from './event-queue/event-queue-view-lucky-users/event-queue-view-lucky-users.component';
import { CreateEventViewLuckyUsersComponent } from './creating-event/create-event-view-lucky-users/create-event-view-lucky-users.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import { UploadLuckyUsersExcelHeaderComponent } from './upload-lucky-user/upload-lucky-users-excel/upload-lucky-users-excel-header/upload-lucky-users-excel-header.component';
import { UploadLuckyUsersExcelBodyComponent } from './upload-lucky-user/upload-lucky-users-excel/upload-lucky-users-excel-body/upload-lucky-users-excel-body.component';


@NgModule({
    declarations: [EventManagementComponent, UploadLuckyUserComponent, EventQueueComponent,
        CreatingEventComponent, EventQueueSkeletonComponent,
        UploadLuckyUsersTableComponent, EditLuckyUserModalComponent, UploadLuckyUsersExcelComponent,
        UploadLuckyUsersTableHelpComponent, UploadLuckyUsersExcelHelpComponent, EventQueueViewLuckyUsersComponent,
        CreateEventViewLuckyUsersComponent,
        UploadLuckyUsersExcelHeaderComponent,
        UploadLuckyUsersExcelBodyComponent],
    imports: [
        CommonModule,
        EventManagementRoutingModule,
        ButtonModule,
        DialogModule,
        ProgressSpinnerModule,
        InputTextModule,
        FormsModule,
        RippleModule,
        ToastModule,
        TableModule,
        CardModule,
        TooltipModule,
        ReactiveComponentModule,
        SkeletonModule,
        ConfirmDialogModule
    ],
    providers: [MessageService, ConfirmationService]
})
export class EventManagementModule {
}
