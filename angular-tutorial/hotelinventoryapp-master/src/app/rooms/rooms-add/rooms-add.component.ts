import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit{
  
  room : RoomList = {
    roomType : '',
    roomNumber : 0,
    amenities : '',
    checkinTime : new Date(),
    checkoutTime : new Date(),
    photos : '',
    price : 0,
    rating : 0
  }

  constructor(private roomsService : RoomsService){

  }

  sucessMessage : string = '';

  ngOnInit(): void {
    
  }
  
  // AddRoom(){
  //   this.roomsService.addRoom(this.room).subscribe((data) => this.sucessMessage = 'Room added successfully')
  // }


}
