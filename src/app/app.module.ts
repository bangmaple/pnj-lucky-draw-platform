import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {AppComponent} from './app.component';
import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TopbarComponent} from './layout/topbar/topbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CountUpModule} from 'ngx-countup';
import {AppRoutingModule} from './app-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {environment} from '../../environment';

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        FooterComponent,
        LayoutComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        ButtonModule,
        RippleModule,
        MenubarModule,
        ToastModule,
        MessageModule,
        ProgressSpinnerModule,
        CountUpModule,
        AngularFireModule.initializeApp(environment),
        AngularFirestoreModule,
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
