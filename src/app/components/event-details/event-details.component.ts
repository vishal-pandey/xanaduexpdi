import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


declare var jquery:any;
declare var $ :any;




@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  theEvent:any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ) {
  	
    this.route.params.subscribe( params => {
      this.theEvent = params.id;
    });

    window.scrollTo(0, 0);

  }





  openDialog(): void {
    let dialogRef = this.dialog.open(Ticket, {
      width: '1000px',
      data: { name: "Vishal Pandey", animal: "fkjdshk" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    
  }

}




@Component({
  selector: 'why-xanady',
  templateUrl: 'ticket.html',
})
export class Ticket implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<Ticket>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    $(".control").submit(function(e) {

                        var url = "http://13.127.67.4/vishal/mail.php";

                         var message = "";
                         var name = $("#name").val();
                         var email = $("#email").val();
                         var thepackage = $("#package").val();
                         var nop = $("#nop").val();
                         



                       message = '<html><body>';
                        message += "<h2>Client Enquiry</h2>";
                        message += '<table rules="all" style="border-color: #666;" cellpadding="10">';
                        message += "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" +name+ "</td></tr>";
                        message += "<tr><td><strong>Email:</strong> </td><td>" + email + "</td></tr>";
                        message += "<tr><td><strong>Package:</strong> </td><td>" + thepackage + "</td></tr>";
                        message += "<tr><td><strong>No. Person :</strong> </td><td>" + nop + "</td></tr>";
                        
                        
                        $.post(url, {
                                message: message,
                            },
                            function(data, status) {
                                alert("Thank You We Will Reach You Soon...");
                                // alert("You have been registered successfully.");
                                //    alert("Thank You for contacting Us");
                                //    window.location.reload();
                            });
                    
              
                e.preventDefault();
            });
  }

}
