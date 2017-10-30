import {Component, Input} from '@angular/core';

@Component({
  selector: 'k-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.scss']
})
export class StarComponent {

  @Input() stars: number = 0;
  @Input() label: string = '';

  constructor() {
    // Empty constructor
  }


}
