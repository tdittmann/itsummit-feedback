import {Component, Input} from "@angular/core";
import {Speaker} from "../../entities/Speaker";

@Component({
  selector: 'feedback-card',
  templateUrl: 'feedbackCard.component.html'
})
export class FeedbackCardComponent {

  @Input() title: string = "";
  @Input() speakers: Speaker[] = [];
  @Input() stars: number = 0;
  @Input() numFeedbacks: number = 0;

  constructor() {

  }

  getFormattedSpeakers(): string {
    let speakerString: string = "";

    this.speakers.forEach(speaker => {
      speakerString += speaker.name + ', ';
    });

    return speakerString.substr(0, speakerString.length - 2);
  }

}
