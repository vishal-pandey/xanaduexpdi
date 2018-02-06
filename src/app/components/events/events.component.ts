import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(".otherEvent").hover(function(){
  		$(this).addClass("animated pulse");
  	}, function(){
  		$(this).removeClass("animated pulse");
  	});
  }

}
