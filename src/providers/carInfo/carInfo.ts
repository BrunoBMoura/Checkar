import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CarInfoProvider {
  url;

  constructor(public http: Http) {
    this.url = 'http://172.21.219.244:5000/placa';
  }

  getInfo(placaCarro){
    return this.http.get(this.url+'/'+placaCarro).map(res => res.json());
  }

}
