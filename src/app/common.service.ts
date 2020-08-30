import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  status = false;
  msg = null;
  allBlogs = null;
  constructor() { }
}
