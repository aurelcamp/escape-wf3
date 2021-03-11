import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/pages/rooms/rooms.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() room: Room;

  showDescription = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggle() {
    this.showDescription = !this.showDescription;
  }

}
