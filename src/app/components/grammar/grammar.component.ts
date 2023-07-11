import { Component } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent {

  questions = [
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

  speak() {
    var synth = window.speechSynthesis;

    var utter = new SpeechSynthesisUtterance(this.questions[0].question)

    var voice = synth.getVoices().filter(_ => _.lang.indexOf('en-') > -1)[2];

    utter.voice = voice;
    // utter.rate = 0.75;
    synth.speak(utter)


  }


}
