/* Imported Mock Data for now,
   May connect to my master golang backend and fileserver microsrvice api instead
*/
import { MOCK_IMAGES } from './mock-data/images';
import { Injectable } from '@angular/core';

/* @AUTHOR tk@trevorknott.io */

@Injectable()
export class ImageService {

  visableImages = [];
  /* create empty array to call copy of const not actual const */

  getImages() {
    /* slice(0) is the whole MOCK_IMAGES const */
    return this.visableImages = MOCK_IMAGES.slice(0);
  }

  getImage(id: number) {
    /* Find the image that has the id given in params and return it */
    return MOCK_IMAGES.slice(0).find(image => image.id == id)
  }

  constructor() { }

}
