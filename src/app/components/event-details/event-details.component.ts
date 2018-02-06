import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  theEvent:any;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
  	
    this.route.params.subscribe( params => {
      this.theEvent = params.id;
    });

    window.scrollTo(0, 0);

  }

  ngOnInit() {
  }

}
