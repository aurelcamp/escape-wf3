import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choice-nb',
  templateUrl: './choice-nb.component.html',
  styleUrls: ['./choice-nb.component.scss']
})
export class ChoiceNbComponent implements OnInit {

  @Input() nb = 3;
  @Input() min = 1;
  @Input() max!: number;

  @Output() testEvent = new EventEmitter();

  // Pour avoir le raccourci, if faut terminer le nom de la variable "nb" par "Change" donc "nbChange"
  @Output() nbChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addPerson() {
    this.nb = this.nb + 1;
    this.nbChange.emit(this.nb);
  }

  substractPerson() {
    this.nb--;
    this.nbChange.emit(this.nb);
  }

}
