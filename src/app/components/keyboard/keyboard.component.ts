import { GameService } from 'src/app/services/game-service.service';
import { Letter } from './../../../utils/Guess';
import { Component, OnInit } from '@angular/core';
import {RegionalService} from '../../services/regional-service';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  rows: string[][] = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<-'],
  ];

  falseLetters: string[] = [];
  correctLetters: string[] = [];
  wrongPosLetters: string[] = [];
 
  constructor(private regionalService: RegionalService) {}

  ngOnInit(): void {
   
  }

  letterClickHandler(letter: string) {
    const letterFormatted = letter === 'Del' ? 'Backspace' : letter;
    //this.regionalService.setTypedLetter(letter);
  }
}
