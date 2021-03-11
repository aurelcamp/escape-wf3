import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../pages/rooms/rooms.component';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    public http: HttpClient
  ) { }

  async getRooms() {
    const data = await this.http.get<Room[]>('http://api.les-combien.com/api/open/rooms').toPromise();
    return data;
  }
}
