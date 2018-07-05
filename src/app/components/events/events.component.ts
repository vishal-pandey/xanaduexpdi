import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eS:EventService) { }

  events:any = [];
  pastEvents:any = [];

  carnival:any;
  camper:any;

  ngOnInit() {
  	$(".otherEvent").hover(function(){
  		$(this).addClass("animated pulse");
  	}, function(){
  		$(this).removeClass("animated pulse");
  	});
    this.getNormalEvents();
    this.getCarnival();
    this.getCamper();
  }

  getCarnival(){
    this.eS.getEvents("2").subscribe((r:any)=>{
      console.log(r);
      this.carnival = r;
    })
  }

  getCamper(){
    this.eS.getEvents("3").subscribe((r:any)=>{
      console.log(r);
      this.camper = r;
    })
  }

  getNormalEvents(){
    this.eS.getEvents("1").subscribe((r:any)=>{
      console.log(r);
      for (var i of r) {
        var date_now = new Date();
        date_now.setHours(0,0,0,0);
        var date_event = new Date(i.event_date);
        var flag = date_event.getTime() >= date_now.getTime();
        if (flag) {
          this.events.push(i);
        }else{
          this.pastEvents.push(i);
        }
      }
    })
  }

}
