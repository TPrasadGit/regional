import { Component, Input, OnInit } from '@angular/core';
import { Continents} from '../../../utils/continents';
import { RegionalService} from '../../services/regional-service';
@Component({
  selector: 'app-guess-letter',
  templateUrl: './guess-letter.component.html',
  styleUrls: ['./guess-letter.component.scss'],
})
export class GuessLetterComponent implements OnInit {
  @Input()
  letter='';
  @Input()
  index=0;
  @Input()
  continent='';
  constructor() {}
  
  ngOnInit(): void {
  }
  }
