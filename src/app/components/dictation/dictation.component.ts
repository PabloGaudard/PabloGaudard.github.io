import { Component, Output, EventEmitter } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dictation',
  templateUrl: './dictation.component.html',
  styleUrls: ['./dictation.component.scss']
})
export class DictationComponent {

  faArrowRight = faArrowRight;

  @Output() onFinished = new EventEmitter();

  finish() {
    this.onFinished.emit();
  }

}
