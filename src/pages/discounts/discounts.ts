import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CreateDiscountPage } from '../create-discount/create-discount';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'discounts',
  templateUrl: 'discounts.html'
})

export class DiscountsPage {
	infoTotal : {
		marca : string,
		ano   : string,
		placa : string,
		price : string,
		foto  : string,
    descontos: string
  }
	discountsArray = [];
	aux = [];

  constructor(private navParams: NavParams, private storage: Storage, private navController: NavController, public alertCtrl: AlertController){
		this.infoTotal = this.navParams.data;
	}
	
	ionViewWillEnter(){
		this.discountsArray = [];
		var i = 0;
		var instance;
		if(this.infoTotal.descontos != ""){
			console.log(this.infoTotal.descontos)
			this.aux = this.infoTotal.descontos.split(",")
			for(i=0;i<this.aux.length;i++){
				instance = this.aux[i].split("$");
				this.discountsArray.push({"value": instance[0], "description": instance[1]})
			}
		}
	}

	ready(){
		this.navController.pop();
	}

	createDiscount(){
		this.navController.push(CreateDiscountPage, this.infoTotal);
	}

	pressEvent(e, i){
		let alert = this.alertCtrl.create({
      title: 'Deletar desconto?:',
      subTitle: "-R$"+i.value+",00",
      buttons: [
      {
        text: 'Sim',
        handler: () => {
					this.deleteDiscount(i);
        }
      },
      {
        text: 'Não',     
      }]
    });
    alert.present();
	}

	deleteDiscount(i){
		var uglify = i["value"]+"\\$"+i["description"];
		var virgula = ",";
		if(this.infoTotal.descontos.search(uglify) == 0)
			virgula = "";
		var final = (virgula+uglify).replace("\\", "");
		this.infoTotal.descontos = this.infoTotal.descontos.replace(final,"");
		console.log(this.infoTotal.descontos);
		this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
	}
}
