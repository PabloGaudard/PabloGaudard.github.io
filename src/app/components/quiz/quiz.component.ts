import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output() onQuizFinished = new EventEmitter();

  "questions": any = [
    { "question": "Can we cut bread with the thick edge of a knife?", "answer": 0 },
    { "question": "Can we say “usefuller“ when forming the comparative of “useful“?", "answer": 0 },
    { "question": "By the “background“ of a picture, do we mean its main subject?", "answer": 0 },
    { "question": "Do dogs bury bones?", "answer": 1 },
    { "question": "Do ten pence make a pound?", "answer": 0 },
    { "question": "Is the word “sadder“ spelt with two Ds?", "answer": 1 },
    { "question": "Does tea with sugar taste bitter?", "answer": 0 },
    { "question": "Is it correct to say “The thief robbed my watch“?", "answer": 0 },
    { "question": "Should we handle eggs gently?", "answer": 1 },
    { "question": "Do horses have paws?", "answer": 0 },
    { "question": "Does a disorderly crowd usually scatter when the police arrive?", "answer": 1 },
    { "question": "Does one turn a tap on clockwise?", "answer": 0 },
    { "question": "Is it easy to read a book upside-down?", "answer": 0 },
    { "question": "Do we throw worn-out things away?", "answer": 1 },
    { "question": "Is this sentence correct: “They were never see their home again“?", "answer": 0 },
    { "question": "Is a bar of gold heavier than a bar of iron of the same size?", "answer": 1 },
    { "question": "Is it nice to be deceived by people?", "answer": 0 },
    { "question": "Do people sometimes faint with excitement?", "answer": 1 },
    { "question": "Do car doors open inwards?", "answer": 0 },
    { "question": "Do we get water when ice melts?", "answer": 1 },
    { "question": "If you smoke heavily, are you running risks with your health?", "answer": 1 },
    { "question": "Are there 100 degrees in a right angle?", "answer": 0 },
    { "question": "Is a miner a person who works in a mine?", "answer": 1 },
    { "question": "Is tough meat easy to eat?", "answer": 0 },
    { "question": "Are tigers harmless creatures?", "answer": 0 },
    { "question": "Does it cost money to browse in a shop?", "answer": 0 },
    { "question": "If you bought something for less than its real value, would you be getting a bargain?", "answer": 1 },
    { "question": "Ought we to say “Excuse me“ when we want to pass between two people who are speaking to each other?", "answer": 1 },
    { "question": "Do we screw nails into wood?", "answer": 0 },
    { "question": "Are our eyebrows above our eyelashes?", "answer": 1 },
    { "question": "Does water in a pan boil faster with the lid on?", "answer": 1 },
    { "question": "Is the weather at the North Pole mild?", "answer": 0 },
    { "question": "Is straw dried grass?", "answer": 1 },
    { "question": "Can certain pills relieve pain?", "answer": 1 },
    { "question": "If you wear clothes that are too big for you, are they tight?", "answer": 0 },
    { "question": "Is it correct to say “She came from a near town“?", "answer": 0 },
    { "question": "Is it healthy to live in a damp house?", "answer": 0 },
    { "question": "Do most students have gaps in their knowledge?", "answer": 1 },
    { "question": "Do people ever light candles when there is a failure in the electricity supply?", "answer": 1 },
    { "question": "Do you like thieves and liars?", "answer": 0 }
  ];

  speak(i: number) {
    var synth = window.speechSynthesis;

    var utter = new SpeechSynthesisUtterance(this.questions[i].question)

    this.questions[i].timesHeard = (this.questions[i].timesHeard ?? 0) + 1;

    var voice = synth.getVoices().filter(_ => _.lang.indexOf('en-GB') > -1)[0];

    utter.voice = voice;

    if (this.questions[i].timesHeard == 2)
      utter.rate = 0.70;

    if (this.questions[i].timesHeard == 3)
      utter.rate = 0.6;


    synth.speak(utter)


  }

  continue() {
    this.currentIndex++;
  }

  answer(i: number, answered: any) {
    this.questions[i].answered = answered;
  }

  finish() {
    this.onQuizFinished.emit();
  }

}
