import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Feedback} from '../entities/Feedback';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  public loadLocalFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>('/assets/data/2017_feedback.json');
  }

  public loadOnlineFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>('http://sds-backend.azurewebsites.net/feedback');
  }

}
