import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://xanaduapi.vishalpandey.xyz/";

  getEvents(id){
  	let tosent1 = new FormData();
    tosent1.append('id',id);
    return this.http.post(this.apiUrl+"event/getevents.php", tosent1);
  }

}
