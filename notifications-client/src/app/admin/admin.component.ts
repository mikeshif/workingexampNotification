import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private socket: Socket) { }
  
  sendNotification(){
    this.socket.emit('create notification','Hello there! You have notifiication');
  }

}
