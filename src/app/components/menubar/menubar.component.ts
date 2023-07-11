import { Component } from '@angular/core';

import { faQuestionCircle, faEdit, faMicrophone, faBook} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  faMicrophone = faMicrophone;
  faEdit = faEdit;
  faQuestionCircle = faQuestionCircle;
  faBook = faBook;

}
