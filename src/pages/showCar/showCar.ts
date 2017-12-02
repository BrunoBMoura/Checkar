import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CarInfoProvider } from '../../providers/carInfo/carInfo';
import { ChartsPage } from "../charts/charts";
import { DiscountsPage } from "../discounts/discounts";
import { FavoritesPage } from "../favorites/favorites";
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';

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
        descontos: string
      };
      infoToSend : {};

  constructor(private navController: NavController,
              private navParams: NavParams, 
              private carInfo: CarInfoProvider, 
              private storage: Storage,
              private geolocation: Geolocation,
              public loadingCtrl: LoadingController,
              private http: HTTP) {

      this.displayInfo();
  }

  displayInfo(){
    this.placa = this.navParams.data;
  }

  changePageToCharts(){
    this.navController.push(ChartsPage);
  }

  changePageToDiscounts(){
    this.navController.push(DiscountsPage, this.infoTotal);
  }

  saveInfo(){
    //this.infoTotal.descontos="";
    this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
    console.log("Inserido: ", this.infoTotal);
  }

  ionViewDidLoad(){
    
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
      this.carInfo.getInfo(this.placa).subscribe(info => {
        this.infoTotal = {
          marca: info.brand,
          ano: info.model_year,
          placa: info.plate,
          price: info.preco,
          foto: info.foto,
          descontos: ""
        }
      });
    loader.dismiss();
    this.geolocation.getCurrentPosition().then((resp) => {
       console.log(resp.coords.latitude);
       console.log(resp.coords.longitude);
       this.http.post('http://192.168.1.107:5000/geo', {lat: resp.coords.latitude, lon: resp.coords.longitude}, {})
       .then(data => {
         console.log(data.headers);
       })
       .catch(error => {
         loader.dismiss();
         console.log(error.status);
         console.log(error.error); // error message as string
         console.log(error.headers);
       });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
