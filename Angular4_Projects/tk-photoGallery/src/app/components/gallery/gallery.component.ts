import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryTitle = 'Recent Photos';

  constructor() { }

  ngOnInit() {
  }

}
