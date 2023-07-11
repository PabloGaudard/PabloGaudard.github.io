import { Component } from '@angular/core';

import { faVolumeHigh, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  faVolumeHigh = faVolumeHigh;
  faArrowRight = faArrowRight;
  faHeart = faHeart;

  currentIndex = 0;

  questions: any = [
    { question: 'Can we cut bread with the thick edge of a knife?', answer: 0 },
    { question: 'Can we say “usefuller“ when forming the comparative of “useful“?', answer: 0 },
    { question: 'By the “background“ of a picture, do we mean its main subject?', answer: 0 },

    { question: 'Do dogs bury bones?', answer: 1 },
    { question: 'Do ten pence make a pound?', answer: 0 },
    { question: 'Is the word “sadder“ spelt with two Ds?', answer: 1 },

    { question: 'Does tea with sugar taste bitter?', answer: 0 },
    { question: 'Is it correct to say “The thief robbed my watch“?', answer: 0 },
    { question: 'Should we handle eggs gently?', answer: 1 },

    { question: 'Do horses have paws?', answer: 0 },
  ];

  speak(i: number) {
    var synth = window.speechSynthesis;

    var utter = new SpeechSynthesisUtterance(this.questions[i].question)

    this.questions[i].timesHeard = (this.questions[i].timesHeard ?? 0) + 1;

    var voice = synth.getVoices().filter(_ => _.lang.indexOf('en-') > -1)[2];

    utter.voice = voice;
    // utter.rate = 0.75;
    synth.speak(utter)


  }

  continue() {
    this.currentIndex++;
  }

  answer(i: number, answered: any) {
    this.questions[i].answered = answered;
  }

}
