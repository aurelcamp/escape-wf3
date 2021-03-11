import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

export class Room {
  id: number;
  title: string;
  imageUrl: string;
  imageAlt: string;
  nbMin: number;
  nbMax: number;
  difficulty: number;
  description?: string;
  times: string[];
  isVirtual: boolean;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  difficultyMin = 2;
  difficultyMax = 3;

  rooms: Room[] = [];

  constructor(
    public roomService: RoomService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.rooms = await this.roomService.getRooms();
  }

}
