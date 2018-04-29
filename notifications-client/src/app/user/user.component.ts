import { Component } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private socket: Socket) { 
    socket.on('new notification', function(data){
       alert(data)
    });
  }
}
