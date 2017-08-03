import { Component } from '@angular/core';
import {
  trigger, 
  animate,
  style, 
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

/*  @AUTHOR tk@trevorknott.io  */
@Component({
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
   trigger('arrayAnim', [
      transition('* => *', [
 
      query(':enter', style({opacity: 0}), {optional: true}),
      
      query(':enter', stagger('300ms', [
        animate('1s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1})
        ]))
      ]), {optional: true}),

      query(':leave', stagger('300ms', [
        animate('1s ease-in', keyframes([
          style({opacity: 1, transform: 'translateY(0)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
          style({opacity: 0, transform: 'translateY(-75px)', offset: 1})
        ]))
      ]), {optional: true}),

    ])
   ])
  ]
})

export class AppComponent {
  title = 'tk';

  items = [];

  constructor() {
    this.items = ['this is animations', 'this is angular4', 'this is powerful for design', 'this works with golang well']
  }

  insertItem() {
    this.items.push('this is better with comp')
  }

  removeItem() {
    this.items.pop();
  }
}
