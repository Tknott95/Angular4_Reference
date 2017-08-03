import { Injectable } from '@angular/core';
import { API_CREDS } from '../../globals/api_creds';

/* @AUTHOR tk@trevorknott.io */
@Injectable()
export class ImageService {
  /* I pulled in from globals in rot to ignore then in gloabls inside src/app */
  /* @TODO should I just pul straight from one file instead of the chain? */
  /* @TODO resarch this! */
  query: string;
  API_KEY: string = API_CREDS._pixabay_.api_key;
  API_URL: string = API_CREDS._pixabay_.api_url;

  constructor() { }

}
