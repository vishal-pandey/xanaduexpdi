import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private http:HttpClient) { }


  submitContact(name:any, email:any, query:any){

  	let toSend= new FormData();
  	toSend.append('name', name);
  	toSend.append('email', email);
  	toSend.append('query', query);
  	return this.http.post("https://api.vishalpandey.xyz/xanadu-api/contact/add.php",toSend, {responseType: 'text'});
  }

}
