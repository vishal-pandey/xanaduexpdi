import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mode = 'over';

  scrollTop(){
  	// window.scrollTo(0, 0);
  	var body = $("html, body");
  	body.stop().animate({scrollTop:0}, 500, 'swing', function() {});
  }
}
