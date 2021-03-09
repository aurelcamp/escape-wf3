import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice-nb',
  templateUrl: './choice-nb.component.html',
  styleUrls: ['./choice-nb.component.scss']
})
export class ChoiceNbComponent implements OnInit {

  @Input() nb = 3;
  @Input() min = 1;
  @Input() max!: number;

  constructor() { }

  ngOnInit(): void {
  }

  addPerson() {
    this.nb = this.nb + 1;
  }

  substractPerson() {
    this.nb--;
  }

}
