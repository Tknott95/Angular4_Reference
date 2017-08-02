import { Component, OnInit } from '@angular/core';
import { ImageService } from './../../services/image.service';

@Component({
  selector: 'tk-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryTitle = 'Recent Photos';
  visibleImages: any[] = [];

  constructor( private _imageService: ImageService ) { 
    this.visibleImages = this._imageService.getImages();
  }

  ngOnInit() {
  }

}
