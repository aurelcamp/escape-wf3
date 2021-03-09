import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice-nb',
  templateUrl: './choice-nb.component.html',
  styleUrls: ['./choice-nb.component.scss']
})
export class ChoiceNbComponent implements OnInit {

  nbPersons = 3;

  constructor() { }

  ngOnInit(): void {
  }

  addPerson() {
    this.nbPersons = this.nbPersons + 1;
  }

  substractPerson() {
    this.nbPersons--;
  }

}
