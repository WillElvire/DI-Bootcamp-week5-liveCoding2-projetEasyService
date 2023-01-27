import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl : string  = "https://adaci.so-am.org/api/v1/";

  constructor(private Http : HttpClient) { }

  get(endpoint : string )   {
    return this.Http.get(this.baseUrl + endpoint , {headers : this.httpHeaders()})
  }

  post(endpoint : string , data : any) {
    return this.Http.post(this.baseUrl + endpoint,data,{headers : this.httpHeaders()});
  }

  httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT',
      'Accept': 'application/json',
    });
  }
}
