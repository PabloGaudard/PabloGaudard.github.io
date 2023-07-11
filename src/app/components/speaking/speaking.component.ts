import { Component, OnInit } from '@angular/core';

import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { VoiceRecognitionService } from 'src/app/services/VoiceRecognitionService';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit{
  
  faMicrophone = faMicrophone;
  
  public speachText = "";
  public isUserSpeaking: boolean = false;
  private voiceRecognition = new VoiceRecognitionService();

  ngOnInit(){
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
      this.speachText = input;
    });
  }

  startRecording() {
    this.isUserSpeaking = true;
    this.voiceRecognition.start();
    this.speachText  = "";
  }

  stopRecording() {
    this.voiceRecognition.stop();
    this.isUserSpeaking = false;
  }

}
