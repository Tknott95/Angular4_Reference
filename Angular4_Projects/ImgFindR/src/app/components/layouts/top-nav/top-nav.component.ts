import { Component, OnInit } from '@angular/core';
import { MdMenuModule } from '@angular/material';


@Component({
  selector: 'tk-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {

  constructor() { }

  appTitle: string = "ImgFindR";

  author: string = "tk@trevorknott.io";

  ngOnInit() {
  }

}
