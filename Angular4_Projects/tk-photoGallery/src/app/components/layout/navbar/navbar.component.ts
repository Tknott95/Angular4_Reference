import { Component, OnInit } from '@angular/core';

/* @AUTHOR tk@trevorknott.io */

@Component({
  selector: 'tk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarBrand = 'Trevs Photo Gallery';

  constructor() { }

  ngOnInit() {
  }

}
