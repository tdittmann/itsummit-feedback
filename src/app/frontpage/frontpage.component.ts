import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../services/feedback.service';
import {Feedback} from '../../entities/Feedback';
import {SessionFeedback} from "../../entities/SessionFeedback";
import {SessionEvaluation} from "../../entities/SessionEvaluation";
import {Session} from "../../entities/Session";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  private static NOT_IN_ARRAY = -1;

  feedback: Feedback[];

  starsOrganisation: number = 0;
  starsCatering: number = 0;
  sessionEvaluations: SessionEvaluation[] = [];
  comments: string[] = [];

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit() {
    // Load data from feedback service
    this.feedbackService.loadLocalFeedback().subscribe(
      result => {
        this.feedback = result;

        // Process feedback
        this.feedback.forEach(
          (feedback: Feedback) => {

            this.evaluateSessionFeedback(feedback);

            this.starsCatering += feedback.catering;
            this.starsOrganisation += feedback.organisation;

            this.comments.push(feedback.comment);
          }
        );

        // Calculate averages
        this.starsCatering /= this.feedback.length;
        this.starsOrganisation /= this.feedback.length;
      },
      error => {
        console.error(error);
      }
    );
  }

  private evaluateSessionFeedback(feedback: Feedback): void {

    for (let i = 0; i < feedback.sessions.length; i++) {
      let sessionFeedback: SessionFeedback = feedback.sessions[i];

      if (sessionFeedback) {
        let positionInArray: number = this.isSessionInArray(this.sessionEvaluations, sessionFeedback.session);
        if (positionInArray > FrontpageComponent.NOT_IN_ARRAY) {
          this.sessionEvaluations[positionInArray].numberOfFeedback++;
          this.sessionEvaluations[positionInArray].stars += sessionFeedback.stars;
        }
        else {
          let sessionEvaluation: SessionEvaluation = new SessionEvaluation();
          sessionEvaluation.session = sessionFeedback.session;
          sessionEvaluation.numberOfFeedback++;
          sessionEvaluation.stars += sessionFeedback.stars;
          this.sessionEvaluations.push(sessionEvaluation);
        }
      }

    }
  }

  private isSessionInArray(sessionEvaluations: SessionEvaluation[], session: Session): number {
    for (let i = 0; i < sessionEvaluations.length; i++) {
      let sessionInArray: Session = sessionEvaluations[i].session;

      if (sessionInArray.id == session.id) {
        return i;
      }
    }

    return FrontpageComponent.NOT_IN_ARRAY;
  }


}
