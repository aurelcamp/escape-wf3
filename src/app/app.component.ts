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
  initialPrice = 160;
  totalPrice = this.initialPrice;
  priceByPerson = this.totalPrice / this.nbPersons;

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
    this.calculatePriceByPerson();
  }

  substractPerson() {
    this.nbPersons--;
    this.calculatePriceByPerson();
  }

  checkReduction(val: string) {
    console.log(val);
    if (val === 'REDUC') {
      this.totalPrice = 0.7 * this.initialPrice;
    } else {
      this.totalPrice = this.initialPrice;
    }
    this.calculatePriceByPerson();
  }

  calculatePriceByPerson() {
    this.priceByPerson = Math.floor(this.totalPrice / this.nbPersons);
  }

}