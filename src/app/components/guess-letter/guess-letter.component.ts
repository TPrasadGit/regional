import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-guess-letter',
  templateUrl: './guess-letter.component.html',
  styleUrls: ['./guess-letter.component.scss'],
})
export class GuessLetterComponent implements OnInit {
  @Input() letter = '';
  @Input() index = 0;
  @Input() continent = '';
  @Input() value = '';

  @Output() onLetterFocus: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onFocus() {
    this.onLetterFocus.emit(true);
  }
}
