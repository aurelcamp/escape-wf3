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
  @Output() nbModify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addPerson() {
    this.nb = this.nb + 1;
    this.nbModify.emit(this.nb);
  }

  substractPerson() {
    this.nb--;
    this.nbModify.emit(this.nb);
  }

}
