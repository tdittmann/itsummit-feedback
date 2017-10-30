import {Component, Input} from "@angular/core";

@Component({
  selector: 'speech-bubble',
  templateUrl: 'speechBubble.component.html',
  styleUrls: ['speechBubble.component.scss']
})
export class SpeechBubbleComponent {

  @Input() quote: string;

  constructor() {

  }

}
