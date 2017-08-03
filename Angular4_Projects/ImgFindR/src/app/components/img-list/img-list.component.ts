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

}
