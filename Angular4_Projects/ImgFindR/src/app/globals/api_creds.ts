import { PIXABAY_CREDS } from '../../../globals/api_creds';
import { Http, Headers } from '@angular/http';

/* @AUTHOR tk@trevorknott.io */
/* Chained through a private folder, may be a stupid way of doing this */
/* @TODO double check this functionality */
export const API_CREDS = {
    _pixabay_: {
        api_key: PIXABAY_CREDS.api_key,
        api_url: PIXABAY_CREDS.api_url
    }
}
