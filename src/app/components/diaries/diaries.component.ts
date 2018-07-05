import { Component, OnInit } from '@angular/core';
import { DiariesService } from '../../services/diaries.service';

@Component({
  selector: 'app-diaries',
  templateUrl: './diaries.component.html',
  styleUrls: ['./diaries.component.css']
})
export class DiariesComponent implements OnInit {

  constructor(private dS:DiariesService) { }

  insta:any;
  instaImg=[];
  instaVideo=[];

  ngOnInit() {
  	this.dS.getInsta().subscribe((r:any)=>{
  		console.log(r);
  		this.insta = r.data;
  		for (var i of r.data) {
  			if (i.type=='image') {
  				this.instaImg.push(i);
  			}else if(i.type == 'video'){
  				this.instaVideo.push(i);
  			}
  		}
  	})
  }

}
