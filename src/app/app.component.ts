import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AJ Portfolio';
  socket;
  constructor(public common: CommonService ) {
    this.socket = io('http://localhost:3000/');
    this.socket.on('connection', val => {
      console.log('connected');
    });
  }

}
