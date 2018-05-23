import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { CafeComponent } from './components/cafe/cafe.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

const routes: Routes = [
	{path: '', component: HomeComponent },
	{path: 'events', component: EventsComponent },
	{path: 'event-details/:id', component: EventDetailsComponent },
	{path: 'cafe', component: CafeComponent },
	{path: 'contact', component: ContactComponent },
	{path: 'thankyou', component: ThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
