import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChartsPage } from "../charts/charts"
import { DiscountsPage } from "../discounts/discounts"

@Component({
  selector: 'page-showFav',
  templateUrl: 'showFav.html'
})

export class ShowFavPage {
      info : {
      marca : string,
      ano   : string,
      placa : string,
      price : string,
      foto  : string,
      descontos: string
    }

  constructor(private navController: NavController, private navParams: NavParams, private storage: Storage){
    this.Info();
  }
  Info(){
    this.info = this.navParams.data;
    console.log(this.info)
  }
  
  changePageToCharts(){
    this.navController.push(ChartsPage);
  }

  changePageToDiscounts(){
    this.navController.push(DiscountsPage, this.info);
  }

  deleteInfo(){
    console.log("remover: ", this.info.placa);
    this.storage.remove(this.info.placa);
    this.navController.pop();
  }
}