import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseURL = 'http://localhost:35575/';
  constructor(private http: HttpClient) { }

  public get(url:any){
   const headers= new HttpHeaders()
   .set('content-type', 'application/json')
   .set('Access-Control-Allow-Origin', '*');
    //console.log(this.baseURL+url)
    return this.http.get(this.baseURL+url,{responseType: 'text'});
  }
}
