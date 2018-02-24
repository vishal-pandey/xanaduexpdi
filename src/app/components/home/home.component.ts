import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }




  openDialog(): void {
    let dialogRef = this.dialog.open(WhyXanadu, {
      width: '1000px',
      data: { name: "Vishal Pandey", animal: "fkjdshk" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }





  scrollTop(){
  	// window.scrollTo(0, 0);
  	var body = $("html, body");
	body.stop().animate({scrollTop:0}, 500, 'swing', function() {
	});
  }

  ngOnInit() {
  	// $(".why-xanady")
  	var $animation_elements = $('.why-text');
		var $window = $(window);
		$window.on('scroll', check_if_in_view);
		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');

		function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);

		  $.each($animation_elements, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		    //check to see if this current container is within viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {
		      $element.addClass('animated slideInLeft');
		    } else {
		      $element.removeClass('animated slideInLeft');
		    }
		  });
		}

		var $animation_elementsB = $('.xanadu-text');
		var $window = $(window);
		$window.on('scroll', check_if_in_viewB);
		$window.on('scroll resize', check_if_in_viewB);
		$window.trigger('scroll');

		function check_if_in_viewB() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);

		  $.each($animation_elementsB, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		    //check to see if this current container is within viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {
		      $element.addClass('animated slideInRight');
		    } else {
		      $element.removeClass('animated slideInRight');
		    }
		  });
		}

  }




}






@Component({
  selector: 'why-xanady',
  templateUrl: 'why-xanadu.html',
})
export class WhyXanadu {

  constructor(
    public dialogRef: MatDialogRef<WhyXanadu>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}