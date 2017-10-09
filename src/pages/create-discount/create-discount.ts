import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CreateDiscountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-discount',
  templateUrl: 'create-discount.html',
})
export class CreateDiscountPage {
  infoTotal : {
		marca : string,
		ano   : string,
		placa : string,
		price : string,
    foto  : string,
    descontos: string
  }
  desconto: number;
  descricao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.infoTotal = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDiscountPage');
  }

  ready(){
      var virgula = ","
      if(this.infoTotal.descontos == "")
        virgula = ""
      this.infoTotal.descontos = this.infoTotal.descontos.concat(virgula+String(this.desconto)+"$"+this.descricao);
      console.log(this.infoTotal.descontos);
      this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
      this.navCtrl.pop();
  }
}
