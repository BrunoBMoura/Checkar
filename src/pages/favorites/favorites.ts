import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
	carInfo : {
      marca : string,
      ano   : string,
      placa : string,
      price : string,
      foto  : string,
      saveplaca : string
    }
  cont : any = 0;

  constructor(public navCtrl: NavController, private navParams: NavParams, private storage: Storage) {
    this.navCtrl = navCtrl;
    this.carInfo = this.navParams.data;
  }

  ionViewWillEnter(){
    this.storage.get('primeiro').then((val) => {
      if(val != null){
        this.carInfo = JSON.parse(val);
      } else {
        console.log("ERRO");
      }
    });
  }
}