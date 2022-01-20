import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'start',
        loadChildren: () => import('./start/start.module').then(m => m.StartModule),
      },
      {
        path: 'home',
       loadChildren: () => import('./event-management/event-management.module').then(m => m.EventManagementModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
