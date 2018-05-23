import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private cS:ContactService, public sB:MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  submitContact(name, email, query){
  	this.cS.submitContact(name, email, query).subscribe((r:any)=>{
  		if (r != "success") {
        this.sB.open(r, 'x',{
          duration: 20000,
        })
      }else{
        this.router.navigate(['/thankyou']);
      }
  	})
  }

}
