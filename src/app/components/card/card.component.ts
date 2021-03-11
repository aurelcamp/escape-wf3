import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() room: any;

  showDescription = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showDescription = !this.showDescription;
  }

}
