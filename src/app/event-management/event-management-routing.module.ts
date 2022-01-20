import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventManagementComponent} from './event-management.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EventManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventManagementRoutingModule { }
