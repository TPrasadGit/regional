import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './containers/game/game.component';
import { HelpComponent } from './containers/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import { GuessLineComponent } from './components/guess-line/guess-line.component';
import { GuessLetterComponent } from './components/guess-letter/guess-letter.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoTabDirective } from './directives/auto-tab.directive';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HelpComponent,
    HeaderComponent,
    GuessLineComponent,
    GuessLetterComponent,
    KeyboardComponent,
    ModalComponent,
    AutoTabDirective
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
