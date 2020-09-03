import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  status = false;
  msg = null;
  allBlogs = null;
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  postApi(url, obj) {
    return this.http.post(this.baseUrl + url, obj);
  }
}
