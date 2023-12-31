import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExamComponent } from './views/exam/exam.component';
import { GrammarComponent } from './components/grammar/grammar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { DictationComponent } from './components/dictation/dictation.component';
import { SpeakingComponent } from './components/speaking/speaking.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from './components/header/header.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    GrammarComponent,
    QuizComponent,
    DictationComponent,
    SpeakingComponent,
    MenubarComponent,
    HeaderComponent,
    CountDownTimerComponent,
    ProgressbarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
