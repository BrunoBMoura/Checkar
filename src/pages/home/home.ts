import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ShowCarPage } from '../showCar/showCar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  placa;

  constructor(public nav: NavController,  private navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.nav = nav;
  }

  Search(placa)
  {
    this.placa = placa;
    let alert = this.alertCtrl.create({
    title: 'Placa a ser pesquisada',
    subTitle: placa,
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
    let loader = this.loadingCtrl.create({
      content: "Procurando...",
      duration: 4000
    });
    loader.onDidDismiss(() => {
    		this.nav.push(ShowCarPage, this.placa);
  		});
    loader.present();
  }

  
}


