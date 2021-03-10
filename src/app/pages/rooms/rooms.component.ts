import { Component, OnInit } from '@angular/core';

class Room {
  title: string;
  imageUrl: string;
  imageAlt: string;
  nbMin: number;
  nbMax: number;
  difficulty: number;
  description: string;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  
  room: Room = {
    title: 'Pirate',
    imageUrl: 'http://les-combien.com/images/rooms/pirate.jpg',
    imageAlt: 'Salle pirate',
    nbMin: 2,
    nbMax: 4,
    difficulty: 2,
    description: `En tant que jeune mousse, vous devrez visiter le bateau du célèbre pirate Barbe Verte. Saurez-vous découvrir où il a caché le trésor découvert sur l'île Perdue et quitter le navire ? Mais
    dépêchez-vous les autres pirates vous suspectent et ont décidé de vous enfermer.`
  }

  showDescription = true;

  constructor() { }

  ngOnInit(): void {
  }

}
