import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ShowFavPage } from "../showFav/showFav"

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
      descontos: string //separados por ',' no estilo valor$descrição
    }
  dataArray = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, private storage: Storage) {
    this.navCtrl = navCtrl;
    this.carInfo = this.navParams.data;
  }

  ionViewWillEnter(){
    let value, aux : string;
    this.storage.forEach((value) => {
      aux = JSON.parse(value);
      this.dataArray.push(aux);
    });
    console.log(this.storage.keys());
  }

  sendInfoToFav(i){
    this.dataArray = [];
    this.navCtrl.push(ShowFavPage,i);
  }
}
