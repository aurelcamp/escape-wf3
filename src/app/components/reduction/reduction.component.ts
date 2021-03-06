import { Component, OnInit } from '@angular/core';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-reduction',
  templateUrl: './reduction.component.html',
  styleUrls: ['./reduction.component.scss']
})
export class ReductionComponent implements OnInit {

  name = 'Paul';
  roomNumber = 2;

  nbPersons = 2;
  initialPrice = 10;
  totalPrice = this.initialPrice;
  priceByPerson = this.totalPrice / this.nbPersons;

  maxNbPersons = 8;

  constructor(
    public discountService: DiscountService
  ) { }

  ngOnInit(): void {
    this.initialPrice = this.discountService.calculatePrice();
    this.totalPrice = this.initialPrice;
    this.priceByPerson = this.totalPrice / this.nbPersons;
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

  test(evt: any) {
    console.log(evt);
  }

  nbModified(numb: number) {
    this.nbPersons = numb;
    this.calculatePriceByPerson();
  }

}
