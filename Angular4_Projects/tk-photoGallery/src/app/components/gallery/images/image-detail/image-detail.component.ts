import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from './../../../../services/image.service';

@Component({
  selector: 'tk-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  my_single_image: any;

  constructor( private _imageService: ImageService, private _activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.my_single_image = this._imageService.getImage(this._activatedRoute.snapshot.params['id']);
  }

}
