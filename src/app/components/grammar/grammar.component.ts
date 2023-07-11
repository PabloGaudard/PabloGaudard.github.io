import { Component } from '@angular/core';

import { faVolumeHigh, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent {

  faVolumeHigh = faVolumeHigh;
  faArrowRight = faArrowRight;
  faHeart = faHeart;

  currentIndex = 0;

  questions: any = [
    { question: "___ average, Tim drinks three cups of tea a day.", right: "On", wrong: "In" },
    { question: "It’s ___  likely that Sam will be the last to get here; he usually is!", right: "highly", wrong: "hardly" },
    { question: "Why do I have to go to bed so early? I’m not tired ___ all.", right: "at", wrong: "in" },

    { question: "I’m not sure Jack’s very eager ___  Claudia this evening!", right: "to see", wrong: "on seeing" },
    { question: "Ken is a very ___ man; he seems to love danger.", right: "incovenient", wrong: "daring" },
    { question: "For heavens’ ___ stop whistling, it’s driving me round the bend!", right: "sake", wrong: "fake" },

    { question: "I miss ___ to the beach every weekend; it used to be great fun.", right: "going", wrong: "to go" },
    { question: "I’m not afraid ___ your dog, I’m only shaking because it’s cold.", right: "of", wrong: "from" },
    { question: "She ___ me to go there again.", right: "forbade", wrong: "prevented" },
    { question: "I usually ___ asleep about ten minutes after turning off the lights.", right: "fall", wrong: "go" }
];

  speak(word: string) {
    var synth = window.speechSynthesis;

    var utter = new SpeechSynthesisUtterance(word.replaceAll("_", ""))

    // this.questions[i].timesHeard = (this.questions[i].timesHeard ?? 0) + 1;

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


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-grammar',
//   templateUrl: './grammar.component.html',
//   styleUrls: ['./grammar.component.scss']
// })
// export class GrammarComponent {

//   questions = [
//     { question: "___ average, Tim drinks three cups of tea a day.", right: "On", wrong: "In" },
//     { question: "It’s ___  likely that Sam will be the last to get here; he usually is!", right: "highly", wrong: "hardly" },
//     { question: "Why do I have to go to bed so early? I’m not tired ___ all.", right: "at", wrong: "in" },

//     { question: "I’m not sure Jack’s very eager ___  Claudia this evening!", right: "to see", wrong: "on seeing" },
//     { question: "Ken is a very ___ man; he seems to love danger.", right: "incovenient", wrong: "daring" },
//     { question: "For heavens’ ___ stop whistling, it’s driving me round the bend!", right: "sake", wrong: "fake" },

//     { question: "I miss ___ to the beach every weekend; it used to be great fun.", right: "going", wrong: "to go" },
//     { question: "I’m not afraid ___ your dog, I’m only shaking because it’s cold.", right: "of", wrong: "from" },
//     { question: "She ___ me to go there again.", right: "forbade", wrong: "prevented" },
//     { question: "I usually ___ asleep about ten minutes after turning off the lights.", right: "fall", wrong: "go" }
//   ]


//   speak(speech: string) {

//     speech = speech.replaceAll("_", "");
  
//     var synth = window.speechSynthesis;

//     var utter = new SpeechSynthesisUtterance(speech)

//     var voice = synth.getVoices().filter(_ => _.lang.indexOf('en-') > -1)[2];

//     utter.voice = voice;
//     // utter.rate = 0.75;
//     synth.speak(utter)


//   }


// }
