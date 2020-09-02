import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  status = false;
  msg = null;
  allBlogs = null;
  baseUrl = 'https://anshul-portfolio-backend.herokuapp.com/';
  constructor(private http: HttpClient) { }

  postApi(url, obj) {
    this.http.post(base)
  }
}
