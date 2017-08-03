import { Component } from '@angular/core';

/* <!-- @AUTHOR tk@trevorknott.io --> */
@Component({
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
