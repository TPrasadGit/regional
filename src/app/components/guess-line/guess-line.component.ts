import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Guess } from 'src/utils/Guess';
import {RegionalService, TodaysPuzzle } from '../../services/regional-service';
@Component({
  selector: 'app-guess-line',
  templateUrl: './guess-line.component.html',
  styleUrls: ['./guess-line.component.scss'],
  providers:[RegionalService]
})
export class GuessLineComponent implements OnInit {
  @Input()
  guess: Guess;
  todaysPuzzle:TodaysPuzzle;

  _regionalService:RegionalService;
  constructor(private regionalService:RegionalService) {
    this._regionalService=regionalService;
  }

ngOnInit(): void {
    //this._regionalService.GetPuzzleOfTheDay().subscribe(val=>this.todaysPuzzle=val);  
    this.todaysPuzzle=[
      {
        "continent": "AMERICA",
        "city": "Newyork",
        "hint": [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      {
        "continent": "ASIA-PACIFIC",
        "city": "Lucknow",
        "hint": [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      {
        "continent": "EMEA",
        "city": "London",
        "hint": [
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    ]
 }  
   @HostListener('document:keyup', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent, todaysPuzzle:TodaysPuzzle) {
    this.regionalService.keyPressHandleRegional(event,this.todaysPuzzle);
  }
  
}
