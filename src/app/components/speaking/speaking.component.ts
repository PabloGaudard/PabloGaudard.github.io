import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    this.videoPlayer = document.getElementsByTagName("video")[1];
  }

  toggleVideo() {
    if (this.timesHeard < 2) {
      this.videoPlayer?.play();
      this.timesHeard++
    }
  }

  // questions = [];
  questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
      if (input != '')
        this.speachText = input;

    });
  }

  continue() {
    this.stopRecording();

    this.currentIndex++;
    this.speachText = "";
    this.videoPlayer = document.getElementsByTagName("video")[this.currentIndex];
    this.timesHeard = 0;
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
