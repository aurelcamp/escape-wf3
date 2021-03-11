import { Component, OnInit } from '@angular/core';
import { Room } from '../rooms/rooms.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Bienvenue dans escape';
  nbClassicsRooms = 4;
  nbVirtualRooms = 5;
  ageMin = 12;
  ageMax = 120;

  isDisabled = false;

  rooms: Room[] = [
    {
	    id: 1,
      title: 'Pirate',
      description: `En temps que jeune mousse, vous devrez visiter le bateau du célèbre pirate Barbe Verte. Saurez-vous découvrir où
        il a caché le trésor découvert sur l'île Perdue et quitter le navire ? Mais
        dépêchez-vous les autres pirates vous suspectent
        et ont décidé de vous enfermer.`,
      imageUrl: 'http://les-combien.com/images/rooms/pirate.jpg',
      imageAlt: 'Escape room pirate',
      times: ['12h30', '17h00', '21h00'],
      nbMin: 2,
      nbMax: 4,
      difficulty: 3,
      isVirtual: false,
    },
    {
	    id: 2,
      title: `La conquête spatiale `,
      description: `A l'intérieur d'une navette reconstruite à l'identique, vous devrez découvrir la source de l'avarie responsable
        de la perte de contrôle de la navette spatiale ? Vous ne disposerez que d'une heure pour résoudre le problème et éviter le crash
        de votre navette.`,
      imageUrl: 'http://les-combien.com/images/rooms/space.jpg',
      imageAlt: 'Escape room espace',
      times: ['8h30', '12h00'],
      nbMin: 3,
      nbMax: 6,
      difficulty: 2,
      isVirtual: true,
    },
    {
	    id: 3,
      title: `Le pharaon`,
      description: `Jeunes archéologues vous vous trouvez à l'intérieur d'une pyramide égyptienne. Votre objectif : parvenir à découvrir
      la salle secrète qui renferme le tombeau d'un très ancien pharaon. Mais méfiez-vous de la malédiction.`,
      imageUrl: 'http://les-combien.com/images/rooms/egypt.jpg',
      imageAlt: 'Escape room pharaon',
      times: ['16h00', '18h00'],
      nbMin: 4,
      nbMax: 4,
      difficulty: 1,
      isVirtual: true,
    },
    {
	    id: 4,
      title: 'Chevaliers',
      imageUrl: 'http://les-combien.com/images/rooms/knight.jpg',
      imageAlt: 'Escape room chevalier',
      times: ['10h00', '20h00'],
      nbMin: 2,
      nbMax: 6,
      difficulty: 3,
      isVirtual: false,
    },
    {
	    id: 5,
      title: 'Prison',
      description: `Vous êtes enfermés dans une prison et devez vous échappez le plus rapidement possible`,
      imageUrl: 'https://aurelcamp.fr/escape/api/images/rooms/jail.jpg',
      imageAlt: 'Escape room prison',
      times: ['14h00', '15h30', '17h00', '18h30'],
      nbMin: 2,
      nbMax: 3,
      difficulty: 1,
      isVirtual: false,
    }
  ];

  ngOnInit(): void {
    setTimeout(
      () => {
        this.title = 'Saurez-vous sortir vivant ?';
      }, 5000
    );  

  }

  lastLi() {
    return 'Un amusement garanti';
  }

  seeMore() {
    alert('Plus');
  }

}
