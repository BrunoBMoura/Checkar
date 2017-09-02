import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarInfoProvider {
  url;

  constructor(public http: Http) {
    console.log('Hello CarInfoProvider Provider');
    this.url = 'https://checkcarapp.herokuapp.com';
  }

  getInfo(placaCarro){
    return this.http.get(this.url+'/'+placaCarro).map(res => res.json());
  }
}
