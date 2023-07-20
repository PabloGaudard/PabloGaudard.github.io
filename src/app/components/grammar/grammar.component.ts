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
    {
      "question": "___ average, Tim drinks three cups of tea a day.",
      "options": ["On", "In"]
    },
    {
      "question": "It’s ___  likely that Sam will be the last to get here; he usually is!",
      "options": ["highly", "hardly"]
    },
    {
      "question": "Why do I have to go to bed so early? I’m not tired ___ all.",
      "options": ["at", "in"]
    },
    {
      "question": "I’m not sure Jack’s very eager ___  Claudia this evening!",
      "options": ["to see", "on seeing"]
    },
    {
      "question": "Ken is a very ___ man; he seems to love danger.",
      "options": ["daring", "inconvenient"]
    },
    {
      "question": "For heavens’ ___ stop whistling, it’s driving me round the bend!",
      "options": ["sake", "fake"]
    },
    {
      "question": "I miss ___ to the beach every weekend; it used to be great fun.",
      "options": ["going", "to go"]
    },
    {
      "question": "I’m not afraid ___ your dog, I’m only shaking because it’s cold.",
      "options": ["of", "from"]
    },
    {
      "question": "She ___ me to go there again.",
      "options": ["forbade", "prevented"]
    },
    {
      "question": "I usually ___ asleep about ten minutes after turning off the lights.",
      "options": ["fall", "go"]
    },
    {
      "question": "Sophie speaks English ___ French.",
      "options": ["from", "in addition to"]
    },
    {
      "question": "Andrew expected to meet a few of his friends at the beach, but he didn’t see ___ of them.",
      "options": ["either", "any"]
    },
    {
      "question": "I suggested buying a new car, but my wife ________________.",
      "options": ["didn't want me to", "didn't want me"]
    },
    {
      "question": "George had no idea about the party we’d arranged. It took him completely ___ surprise.",
      "options": ["by", "for"]
    },
    {
      "question": "The policeman ___ into great detail about the importance of fixing lights to my bike.",
      "options": ["went", "made up"]
    },
    {
      "question": "The noun of the verb “annoy” is ___ .",
      "options": ["annoyance", "annoying"]
    },
    {
      "question": "___ Gavin, the disturbance in the town lasted for days and days.",
      "options": ["According to", "In accordance"]
    },
    {
      "question": "I think I’m going to have a pasta dish. What ___ you?",
      "options": ["about", "with"]
    },
    {
      "question": "It’s quite a cloudy day for a picnic, so we’ll have to ___ our fingers crossed it doesn’t rain.",
      "options": ["keep", "have"]
    },
    {
      "question": "Those people are talking so loudly! I wish they ___ ; I’m trying to concentrate.",
      "options": ["couldn't", "wouldn't"]
    },
    {
      "question": "Chris looked very ill ___ ease as he walked into the interview room.",
      "options": ["at", "in"]
    },
    {
      "question": "Help! That man just robbed ________________.",
      "options": ["me of my phone", "a phone from me"]
    },
    {
      "question": "Tony ___ his dishonest behaviour. He definitely won’t do anything like that again.",
      "options": ["regrets", "explains"]
    },
    {
      "question": "The chances of Frank remembering your birthday are very small. You might ___ well forget about it.",
      "options": ["so", "as"]
    },
    {
      "question": "I can ___ my breath for about one minute when I’m swimming underwater.",
      "options": ["keep", "hold"]
    },
    {
      "question": "We always seem to do what you want; you never ___ my feelings into account!",
      "options": ["get", "take"]
    },
    {
      "question": "I wasn’t at work last Thursday; I had to ___ a funeral.",
      "options": ["attend", "assist"]
    },
    {
      "question": "I ___ envy him. He earns a lot, but he works for about eleven hours every day.",
      "options": ["do not", "am not"]
    },
    {
      "question": "Turn the photo the right way up; you’re holding it upside ___ .",
      "options": ["down", "ways"]
    },
    {
      "question": "You can ___ a complaint to the airline if your flight is late, can’t you?",
      "options": ["do", "make"]
    },
    {
      "question": "It was a ___ decision to buy the house; we hardly thought about it at all.",
      "options": ["bad", "snap"]
    },
    {
      "question": "Rebecca’s job had something to ___ insurance but I don’t know what it was exactly.",
      "options": ["do with", "done in"]
    },
    {
      "question": "I find him hard to work with because he loses his ___ quite easily.",
      "options": ["temper", "humour"]
    },
    {
      "question": "I get paid in ___ . In other words, I do my work first, and I get paid afterwards.",
      "options": ["arrears", "advance"]
    },
    {
      "question": "___ , one should immediately leave the building.",
      "options": ["In case of fire", "The case of a fire"]
    },
    {
      "question": "I wish you’d get ___ of that old jacket.",
      "options": ["rid", "avoid"]
    },
    {
      "question": "The crime happened during the day, so it’s highly ___ that someone witnessed it.",
      "options": ["likely", "probably"]
    },
    {
      "question": "If you’re going to the shops could you ___ me a favour?",
      "options": ["do", "make"]
    },
    {
      "question": "You should always ___ your seatbelt, even if you’re sitting in the back of a car.",
      "options": ["put", "fasten"]
    },
    {
      "question": "Jack, stop making a ____________ of yourself and behave properly!",
      "options": ["nuisance", "trouble"]
    }
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
