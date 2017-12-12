import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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
        descontos: string,
        anos: any[],
        precos: Array<string>
      };
      infoToSend : {};

  constructor(private navController: NavController,
              private navParams: NavParams, 
              private carInfo: CarInfoProvider,
              public alertCtrl: AlertController, 
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
    this.navController.push(ChartsPage, this.infoTotal);
  }

  changePageToDiscounts(){
    this.navController.push(DiscountsPage, this.infoTotal);
  }

  showInvalidate()
  {
    let alert = this.alertCtrl.create({
      title: 'Placa Inválida',
      subTitle: 'Pesquisar outra placa.',
      buttons: ['OK']
    });
    alert.present();  
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
      this.carInfo.getInfo(this.placa).subscribe(info => {
        this.infoTotal = {
          marca: info.brand,
          ano: info.model_year,
          placa: info.plate,
          price: info.preco,
          foto: info.foto,
          descontos: "",
          anos: info.anos,
          precos: info.precos
        }
        if(info.plate == null){
          this.showInvalidate();
          this.navController.pop();
        }
      });

    this.geolocation.getCurrentPosition().then((resp) => {
       console.log(resp.coords.latitude);
       console.log(resp.coords.longitude);
       this.http.post('http://172.21.219.210:5000/geo', {lat: resp.coords.latitude, lon: resp.coords.longitude}, {})
       .then(data => {
         console.log(data.headers);
       })
       .catch(error => {
         console.log(error.status);
         console.log(error.error); // error message as string
         console.log(error.headers);
       });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
