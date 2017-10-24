import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class GiphyService {
  constructor(private http: Http) { }

  Giphy(searchText: string) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('api_key', 'uhSUTKUiq8snp7JORen4fViFSuIDaPLH');
    urlSearchParams.set('q', searchText);
    urlSearchParams.set('limit', '3');
    urlSearchParams.set('offset', '0');
    urlSearchParams.set('rating', 'G');
    urlSearchParams.set('lang', 'en');

    return this.http
      .get('https://api.giphy.com/v1/gifs/search', { params: urlSearchParams })
      .toPromise()
      .then((response) => response.json());
  }
}
