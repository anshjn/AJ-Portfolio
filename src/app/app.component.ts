import { Component } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AJ Portfolio';
  socket;
  constructor( ) {
    this.socket = io('http://localhost:3000/');
    this.socket.on('connection', val => {
      console.log('connected');
    });
  }


}
