import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent, WhyXanadu } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { EventsComponent } from './components/events/events.component';
import { CafeComponent } from './components/cafe/cafe.component';
import { EventDetailsComponent, Ticket } from './components/event-details/event-details.component';
import { EventService } from './services/event.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ContactComponent } from './components/contact/contact.component';
import { ContactService } from './services/contact.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { DiariesComponent } from './components/diaries/diaries.component';
import { DiariesService } from './services/diaries.service';
import { ExpeditionComponent } from './components/expedition/expedition.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    EventsComponent,
    CafeComponent,
    EventDetailsComponent,
    WhyXanadu,
    Ticket,
    ContactComponent,
    ThankyouComponent,
    DiariesComponent,
    ExpeditionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    LayoutModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [EventService, ContactService, DiariesService],
  bootstrap: [AppComponent],
  entryComponents: [WhyXanadu, Ticket]
})
export class AppModule { }
