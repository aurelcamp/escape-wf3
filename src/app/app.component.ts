import { Component, OnInit } from '@angular/core';

interface ImageSlide {
  url: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Bienvenue dans escape';
  nbClassicsRooms = 4;
  nbVirtualRooms = 5;
  ageMin = 12;
  ageMax = 120;

  image1: ImageSlide = {
    url: './assets/images/escape1.jpg',
    alt: 'image escape 1',
    title: 'Une immersion parfaite',
  }

  image2: ImageSlide = {
    url: './assets/images/escape2.jpg',
    alt: 'image escape 2',
    title: 'Pour tous les niveaux',
  }

  selectedImageSlide: ImageSlide = this.image1;

  isDisabled = false;

  nbPersons = 1;

  ngOnInit(): void {
    setTimeout(
      () => {
        this.title = 'Saurez-vous sortir vivant ?';
      }, 5000
    );

    setTimeout(
      () => {
        this.selectedImageSlide = this.image2;
      }, 3000
    );    

  }

  lastLi() {
    return 'Un amusement garanti';
  }

  seeMore() {
    alert('Plus');
  }

  addPerson() {
    this.nbPersons = this.nbPersons + 1;
  }

  substractPerson() {
    this.nbPersons--;
  }

}