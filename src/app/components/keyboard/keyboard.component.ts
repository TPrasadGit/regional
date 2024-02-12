import { GameService } from 'src/app/services/game-service.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { PuzzleCity, RegionalService } from '../../services/regional-service';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  rows: string[][] = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
  ];

  falseLetters: string[] = [];
  correctLetters: string[] = [];
  wrongPosLetters: string[] = [];
  currentPuzzleCity: PuzzleCity = {
    continent: '',
    city: '',
    hint: [''],
    value: ['',]
  };

  currentCity: string;
  hideInputBox: boolean = true;

  constructor(private regionalService: RegionalService, private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getCurrentPuzzleCity().subscribe(puzzleCity => {
      if(this.currentPuzzleCity.continent !== puzzleCity.continent) {
        this.currentPuzzleCity = puzzleCity;
        this.currentCity = '';
      }
    });
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    let key = event.key.toLowerCase();
    if(this.rows[0].indexOf(key) > -1
    || this.rows[1].indexOf(key) > -1
    || this.rows[2].indexOf(key) > -1) {
      this.letterClickHandler(key, event);
    }
  }

  letterClickHandler(letter: string, event: Event) {
    if (letter !== 'enter' && letter !== 'backspace') {
      if (this.currentCity && this.currentCity.length < this.currentPuzzleCity.hint.length) {
        this.currentCity = this.currentCity?.concat(letter.toUpperCase())
      } else if (!this.currentCity) {
        this.currentCity = letter.toUpperCase();
      }
    } else if (letter === 'backspace') {
      this.currentCity = this.currentCity?.slice(0, this.currentCity.length - 1);
    }

    let puzzleCityUpdates: PuzzleCity = {
      ...this.currentPuzzleCity,
      value: this.currentCity.split(''),
    };
    this.gameService.setCurrentPuzzleCity(puzzleCityUpdates);
    // this.regionalService.keyPressHandleRegional(event, this.currentPuzzleCity);
  }
}
