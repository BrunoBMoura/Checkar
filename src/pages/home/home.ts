import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ShowCarPage } from '../showCar/showCar';
import { SettingsPage } from "../settings/settings";
import { FavoritesPage } from "../favorites/favorites"
import { CameraPage } from '../camera/camera'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  placa;

  constructor(public nav: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.nav = nav;
  }

  changePageToSettings(){
    this.nav.push(SettingsPage);
  }

  changePageToFavorites(){
    this.nav.push(FavoritesPage);
  }
  
  changePageToCameraPage(){
    this.nav.push(CameraPage);
  }
  
  Search(placa)
  {
    this.placa = placa;
    let alert = this.alertCtrl.create({
      title: 'Placa a ser pesquisada:',
      subTitle: this.placa,
      buttons: [
      {
        text: 'OK',
        handler: () => {
          this.Loading();
        }
      },
      {
        text: 'Tentar novamente',     
      }]
    });
    alert.present();  
  }

  Loading() {
    	this.nav.push(ShowCarPage, this.placa);
  }
  
}


