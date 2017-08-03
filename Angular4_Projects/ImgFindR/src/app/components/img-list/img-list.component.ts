import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';

/* @AUTHOR tk@trevorknott.io */
@Component({
  selector: 'tk-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})
export class ImgListComponent implements OnInit {
  images: any[];

  constructor( private _imageService: ImageService) { }

  ngOnInit() {
  }

  searchImages(query_to_make: string) {
    return this._imageService.getImage(query_to_make).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log("Request Complete!")
    )
  }

}
