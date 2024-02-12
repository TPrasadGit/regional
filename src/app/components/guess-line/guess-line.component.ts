import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Guess } from 'src/utils/Guess';
import { PuzzleCity, RegionalService, TodaysPuzzle } from '../../services/regional-service';
import { GameService } from 'src/app/services/game-service.service';
@Component({
  selector: 'app-guess-line',
  templateUrl: './guess-line.component.html',
  styleUrls: ['./guess-line.component.scss'],
  providers: [RegionalService]
})
export class GuessLineComponent implements OnInit {
  @Input() guess: Guess;
  todaysPuzzle: TodaysPuzzle;
  _todaysPuzzle: TodaysPuzzle;

  _regionalService: RegionalService;
  constructor(private regionalService: RegionalService, private gameService: GameService) {
    this._regionalService = regionalService;
  }

  ngOnInit(): void {
    //this._regionalService.GetPuzzleOfTheDay().subscribe(val=>this.todaysPuzzle=val);  
    this.todaysPuzzle = [
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
        ],
        "value": [''],
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
        ],
        "value": [''],
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
        ],
        "value": [''],
      }
    ];

    this.gameService.setFocussedContinent(this.todaysPuzzle[0]);

    this.gameService.getCurrentPuzzleCity().subscribe(puzzleCity => {
      this.todaysPuzzle.forEach((puzzle, index) => {
        if (puzzleCity.continent === puzzle.continent) {
          this.todaysPuzzle[index].value = puzzleCity.value;
        }
      });
    });
  }
  // @HostListener('document:keyup', ['$event'])
  //   handleKeyboardEvent(event: KeyboardEvent, todaysPuzzle:TodaysPuzzle) {
  //   this.regionalService.keyPressHandleRegional(event,this.todaysPuzzle);
  // }

  setFocussedContinent(activeCity: PuzzleCity, event: Event) {
    this.gameService.setFocussedContinent(activeCity);
  }


  onLetterFocus(focussedCity: PuzzleCity, event: Event) {
    this.gameService.setFocussedContinent(focussedCity);
  }
}
