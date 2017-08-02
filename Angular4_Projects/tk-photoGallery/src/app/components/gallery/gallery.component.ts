import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from './../../services/image.service';

/* @AUTHOR tk@trevorknott.io */
@Component({
  selector: 'tk-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  /* Will use to control pic filters */
  @Input() filterBy?: string = 'all';

  galleryTitle: string = "TK's Gallery";
  visibleImages: any[] = [];

  constructor( private _imageService: ImageService ) { 
    this.visibleImages = this._imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this._imageService.getImages();
  }

}
