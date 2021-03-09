import { Component, OnInit } from '@angular/core';

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

  name = 'Paul';
  roomNumber = 2;

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

  reserve() {
    console.log(this.roomNumber);
  }

}