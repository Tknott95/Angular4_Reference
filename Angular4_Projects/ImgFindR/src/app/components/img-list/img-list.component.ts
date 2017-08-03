import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { MdProgressBarModule,MdChipsModule, MdGridListModule } from '@angular/material';


/* @AUTHOR tk@trevorknott.io */
/* Using diff names in certain instances to help my brain really wrap my head around every concept*/
/* In non practice projects code always keeps cleanest conventions */
@Component({
  selector: 'tk-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})
export class ImgListComponent implements OnInit {
  images: any[];
  imagesReturned: boolean;
  isQuerying: boolean; /* Had to make public for call in html */
  imgSearchBtn: string ='Search for Images';

  constructor( private _imageService: ImageService) { }

  ngOnInit() {
    this.isQuerying = false;
    this.imagesReturned = false;
  }

  /* Request from api comes back as an array called hits */
  /* @TODO create a custom interface to handle results for elegent code :P*/
  handleSuccess(res: any) {
    this.imagesReturned = true;
    this.images = res.hits;
    console.log(res.hits)
  }

  handleError(res: any) {
    this.imagesReturned = false;
    console.log(res);
  }

  searchImages(query_to_search: string) {
    this.isQuerying = true;

    return this._imageService.getImage(query_to_search).subscribe(
      res => this.handleSuccess(res),
      err => this.handleError(err),
      () => this.isQuerying = false
    )
  }

}
