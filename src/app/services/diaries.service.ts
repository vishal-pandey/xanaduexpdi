import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DiariesService {

  constructor(private http:HttpClient) { }
  insta_access_token = "1670887121.c7f0b4d.ab5c73a3b8454e6a84fc414d0d0c4baa";

  apiUrl = "https://api.instagram.com/v1/users/self/media/recent/?access_token=1670887121.c7f0b4d.ab5c73a3b8454e6a84fc414d0d0c4baa";

  getInsta(){
  	return this.http.get(this.apiUrl);
  }

}
