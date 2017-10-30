import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
// Bootstrap components
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {FrontpageComponent} from './frontpage/frontpage.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FeedbackService} from '../services/feedback.service';
import {StarRatingModule} from "angular-star-rating";
import {StarComponent} from "../components/star/star.component";
import {SpeechBubbleComponent} from "../components/speechBubble/speechBubble.component";
import {FeedbackCardComponent} from "../components/feedbackCard/feedbackCard.component";

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    HeaderComponent,
    StarComponent,
    SpeechBubbleComponent,
    FeedbackCardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StarRatingModule.forRoot(),
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
