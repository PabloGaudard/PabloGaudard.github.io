import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  styleUrls: ['./count-down-timer.component.scss'],
  template: `<span>{{ minutes }}m:{{ seconds | number: '2.0' }}s</span>`
})
export class CountDownTimerComponent {
  minutes: number = 30;
  seconds: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          clearInterval(this.interval);
        }
      }
    }, 1000);
  }
}
