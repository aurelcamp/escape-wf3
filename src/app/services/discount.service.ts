import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  calculatePrice() {
    const date = new Date();
    const day = date.getDay();
    let price = 0; 
    if (day >= 1 && day <=5) {
      price = 160;
    } else {
      price = 200;
    }
    return price;
  }
}
