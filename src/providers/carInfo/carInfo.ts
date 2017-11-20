import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CarInfoProvider {
  url;

  constructor(public http: Http) {
      this.url = 'http://192.168.1.107:5000/placa';
  }

  getInfo(placaCarro){
    return this.http.get(this.url+'/'+placaCarro).map(res => res.json());
  }

}
