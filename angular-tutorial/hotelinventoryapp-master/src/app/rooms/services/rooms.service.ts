import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomList[] = [
    {
      roomNumber : 211,
      roomType : 'Deluxe Room',
      amenities : 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price : 1500,
      photos : 'https://unsplash.com/es/fotos/DGa0LQ0yDPc',
      checkinTime: new Date('31-Jan-2023'),
      checkoutTime : new Date('07-Feb-2023'),
      rating : 4.3
    },
    {
      roomNumber : 212,
      roomType : 'Standard Room',
      amenities : 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price : 1000,
      photos : 'https://unsplash.com/es/fotos/DGa0LQ0yDPc',
      checkinTime: new Date('31-Jan-2023'),
      checkoutTime : new Date('07-Feb-2023'),
      rating : 7.5
    },
    {
      roomNumber : 213,
      roomType : 'Private Room',
      amenities : 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price : 2500,
      photos : 'https://unsplash.com/es/fotos/DGa0LQ0yDPc',
      checkinTime: new Date('05-Feb-2023'),
      checkoutTime : new Date('15-Feb-2023'),
      rating : 7.8
    }
  ]

  constructor(){ 
    console.log('Rooms Service initialized....')
  }

  getRooms() {
    return this.roomList;
  }

  addRoom(room : RoomList) {
    this.roomList.push(room);
  }
}
