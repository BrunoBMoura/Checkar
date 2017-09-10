import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CarInfoProvider } from '../../providers/carInfo/carInfo';
//import { HomePage } from "../home/home"

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
      foto  : string;
    }

  constructor(private navController: NavController, private navParams: NavParams, private carInfo: CarInfoProvider) {
      this.displayInfo();
  }

  displayInfo(){
    this.placa = this.navParams.data;
  }

  ionViewWillEnter(){
      this.carInfo.getInfo(this.placa).subscribe(info => {
      //console.log(info);
        this.infoTotal = {
          marca: info.brand,
          ano : info.model_year,
          placa : info.plate,
          price : info.preco,
          foto : info.foto,
        }
        console.log(this.infoTotal.foto);
    });
  }
  
}
