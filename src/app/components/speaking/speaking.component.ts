import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

// import { VoiceRecognitionService } from 'src/app/services/VoiceRecognitionService';

// @Component({
//   selector: 'app-speaking',
//   templateUrl: './speaking.component.html',
//   styleUrls: ['./speaking.component.scss']
// })
// export class SpeakingComponent implements OnInit{

//   faMicrophone = faMicrophone;

//   public speachText = "";
//   public isUserSpeaking: boolean = false;
//   private voiceRecognition = new VoiceRecognitionService();

//   ngOnInit(){
//     this.initVoiceInput();
//   }

//   initVoiceInput() {
//     // Subscription for initializing and this will call when user stopped speaking.
//     this.voiceRecognition.init().subscribe(() => {
//       // User has stopped recording
//       // Do whatever when mic finished listening
//     });

//     // Subscription to detect user input from voice to text.
//     this.voiceRecognition.speechInput().subscribe((input) => {
//       // Set voice text output to
//       this.speachText = input;
//     });
//   }

//   startRecording() {
//     this.isUserSpeaking = true;
//     this.voiceRecognition.start();
//     this.speachText  = "";
//   }

//   stopRecording() {
//     this.voiceRecognition.stop();
//     this.isUserSpeaking = false;
//   }

// }


import { VoiceRecognitionService } from 'src/app/services/VoiceRecognitionService';

import { faVolumeHigh, faArrowRight, faHeart, faMicrophone, faPlay } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit {

  faMicrophone = faMicrophone;
  faVolumeHigh = faVolumeHigh;
  faArrowRight = faArrowRight;
  faHeart = faHeart;
  faPlay = faPlay;

  currentIndex = 0;
  timesHeard = 0;

  public speachText = "";
  public isUserSpeaking: boolean = false;
  private voiceRecognition = new VoiceRecognitionService();

  videoPlayer: HTMLVideoElement | undefined;

  @ViewChild('videoPlayer')
  set mainVideoEl(el: ElementRef) {
    this.videoPlayer = document.getElementsByTagName("video")[0];
  }

  toggleVideo() {
    if (this.timesHeard < 2) {
      this.videoPlayer?.play();
      this.timesHeard++
    }
  }

  questions: any = [
    { question: 'Can we cut bread with the thick edge of a knife?', answer: 0 },
    { question: 'Can we say “usefuller“ when forming the comparative of “useful“?', answer: 0 },
    { question: 'By the “background“ of a picture, do we mean its main subject?', answer: 0 },
    { question: 'Do dogs bury bones?', answer: 1 },
    { question: 'Do ten pence make a pound?', answer: 0 }

  ];

  ngOnInit() {
    this.initVoiceInput();
  }

  initVoiceInput() {
    // Subscription for initializing and this will call when user stopped speaking.
    this.voiceRecognition.init().subscribe(() => {
      // User has stopped recording
      // Do whatever when mic finished listening
    });

    // Subscription to detect user input from voice to text.
    this.voiceRecognition.speechInput().subscribe((input) => {
      // Set voice text output to
      if(input != '')
        this.speachText = input;

    });
  }

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
    this.speachText = "";
    this.videoPlayer = document.getElementsByTagName("video")[this.currentIndex];
    this.timesHeard = 0;
  }

  answer(i: number, answered: any) {
    this.questions[i].answered = answered;
  }

  startRecording() {
    this.isUserSpeaking = true;
    this.voiceRecognition.start();
  }

  stopRecording() {
    this.voiceRecognition.stop();
    this.isUserSpeaking = false;
  }

}
