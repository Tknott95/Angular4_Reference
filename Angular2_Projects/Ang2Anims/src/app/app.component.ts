import { Component, keyframes, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flip', [
      state('flippedState', style({
        'background-color': 'yellow',
        'transform-style': 'preserve-3d',
        'transform': 'rotateX(-360deg )'
      })),
      state('normalState', style({
        'background-color': 'red',
        'transform-style': 'preserve-3d',
        'transform': 'rotateX(360deg )'
      })),
      transition('normalState <=> flippedState', animate('1s 0s ease-in'))
    ]),
    trigger('signal', [    // Take out void tranisiton if you dont want this
       state('void', style({
        'transform': 'translateY(-100%)',
        'background-color': 'black',
        'perspective': '800px'
      })),
      state('go', style({
        'background-color': 'green',
        'width': '20%'
      })),
      state('stop', style({
        'background-color': 'red',
        'width': '25%'
      })),
      transition('void <=> *', animate(1000, keyframes([
        style({'transform': 'scale(.4)'}), // medium
        style({'transform': 'scale(.9)'}), // fast
        style({'transform': 'scale(.5)'}) // slow
      ]))),
      transition('go <=> stop', animate('.5s 0s ease-in')) // ease-in is and can be a cubic-bezier(0,0,0,) 
    ]) // how long  delay   cubic-beziar/type
  ]
})
export class AppComponent {
  signal: string;
  isHere = false;
  flip: string = 'normalState';
  font: string = '1';

  

  onGoClick(){
    this.signal = 'go';
  }
  onStopClick(){
    this.signal = 'stop';
  }
  onToggleClick(){
    this.isHere = !this.isHere;
  }

  flipCard(){
    if (this.flip == 'flippedState') {
      this.flip = 'normalState'
      this.font = 'sup'
      
    } else {
      this.flip = 'flippedState'
      this.font = 'hello'
    }
    console.log('hovered over, and flip state is: ' + this.flip + ' and font is: '+this.font);
  }
}
