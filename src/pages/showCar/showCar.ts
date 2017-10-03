import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CarInfoProvider } from '../../providers/carInfo/carInfo';
import { ChartsPage } from "../charts/charts"
import { DiscountsPage } from "../discounts/discounts"
import { FavoritesPage } from "../favorites/favorites"
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-showCar',
  templateUrl: 'showCar.html'
})

export class ShowCarPage {
      placa : string;
      infoTotal : {
      marca : string,
      ano   : string,
      placa : string,
      price : string,
      foto  : string,
      saveplaca : string
    }

  constructor(private navController: NavController,
              private navParams: NavParams, 
              private carInfo: CarInfoProvider, 
              private storage: Storage) {

      this.displayInfo();
  }

  displayInfo(){
    this.placa = this.navParams.data;
  }

  changePageToCharts(){
    this.navController.push(ChartsPage);
  }

  changePageToDiscounts(){
    this.navController.push(DiscountsPage);
  }

  saveInfo(){
<<<<<<< HEAD

=======
>>>>>>> e91459d38f72d76c24724d2c4d64d2aa9299857c
    this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
    console.log("Inserido: ", this.infoTotal);
  }

  ionViewWillEnter(){
      this.carInfo.getInfo(this.placa).subscribe(info => {
        this.infoTotal = {
          marca: info.brand,
          ano : info.model_year,
          placa : info.plate,
          price : info.preco,
          foto : info.foto,
          saveplaca: this.placa
        }
    });
  }
  

}
