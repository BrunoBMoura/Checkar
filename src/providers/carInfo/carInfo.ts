import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarInfoProvider {
  url;

  constructor(public http: Http) {
    console.log('Hello CarInfoProvider Provider');
    this.url = 'http://flask-env.f7dpsf3jcd.us-east-1.elasticbeanstalk.com';
  }

  getInfo(placaCarro){
    return this.http.get(this.url+'/'+placaCarro).map(res => res.json());
  }
}
