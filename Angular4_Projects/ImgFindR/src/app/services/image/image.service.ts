import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

/* RXJS */
import 'rxjs/add/operator/map';

/* My API CREDS */
import { API_CREDS } from '../../globals/api_creds';

/* @AUTHOR tk@trevorknott.io */
@Injectable()
export class ImageService {
  /* I pulled in from globals in rot to ignore then in gloabls inside src/app */
  /* @TODO should I just pul straight from one file instead of the chain? */
  /* @TODO research this! */

  /* @TODO*/
  /* Is uppercase for private which is an anti pattern, need to research into this for important creds. */
  /* May throw an underscore? */ 

  _API_KEY: string = API_CREDS._pixabay_.api_key;
  _API_URL: string = API_CREDS._pixabay_.api_url;

  // to_query_for: string;
  to_query_per_page: string = "&per_page=" + 10
  url_for_query: string = this._API_URL + this._API_KEY + '&q=';

  constructor( private _http: Http ) { }

  getImage(query) {
    return this._http.get(this.url_for_query + query + this.to_query_per_page)
      .map(res => res.json());
  }

}
