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
    if (day >= 1 && day <=3) {
      price = 170;
    } else {
      price = 220;
    }
    return price;
  }
}
