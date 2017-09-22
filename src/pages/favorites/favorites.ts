import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
	carinfo : {
      marca : string,
      ano   : string,
      placa : string,
      price : string,
      foto  : string,
      saveplaca : string
    }
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.navCtrl = navCtrl;
    this.carinfo = this.navParams.data;
  }

}