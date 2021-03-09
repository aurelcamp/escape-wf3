import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduction',
  templateUrl: './reduction.component.html',
  styleUrls: ['./reduction.component.scss']
})
export class ReductionComponent implements OnInit {

  name = 'Paul';
  roomNumber = 2;

  nbPersons = 1;
  initialPrice = 160;
  totalPrice = this.initialPrice;
  priceByPerson = this.totalPrice / this.nbPersons;

  constructor() { }

  ngOnInit(): void {
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
