import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
	selector: 'page-discounts',
	templateUrl: 'discounts.html'
})

export class DiscountsPage {
	infoTotal: {
		marca: string,
		ano: string,
		placa: string,
		price: string,
		foto: string,
		descontos: string	//discounts="id;price$description,id;price$description"
	}

	constructor(public navCtrl: NavController, private navParams: NavParams, private storage: Storage, private navController: NavController, public alertCtrl: AlertController) {
		this.infoTotal = this.navParams.data;
		this.navCtrl = navCtrl;
	}

	slides = [
		{
			title: "Lateral",
			image: "../assets/image/pngs/lateral1.png",
			id: 1
		},
		{
			title: "Frente",
			image: "../assets/image/pngs/frente1.png",
			id: 2
		},
		{
			title: "Traseira",
			image: "../assets/image/pngs/traseira.png",
			id: 3
		},
		{
			title: "Teto",
			image: "../assets/image/pngs/teto.png",
		},
		{
			title: "Vidros",
			image: "../assets/image/pngs/vidros.png",
			id: 4
		},
		{
			title: "Rodas",
			image: "../assets/image/pngs/rodas.png",
			id: 5
		},
		{
			title: "Lanternas",
			image: "../assets/image/pngs/lanternas.png",
			id: 6
		},
		{
			title: "Outros",
			image: "../assets/image/pngs/semcor.png",
			id: 7
		}
	];

	inicialprice: number;
	notes: any = [];
	ids: any = [];
	discounts: number = 0;
	aux = [];

	ionViewWillEnter() {	//discounts="id;price$description,id;price$description"
		this.notes = [];
		this.aux = [];
		this.ids = [];
		var i = 0;
		var instance;
		var instance2;

		this.originalPrice();

		if (this.infoTotal.descontos != "") {
			console.log(this.infoTotal.descontos)
			if (this.infoTotal.descontos.search(/,/g) == -1) {
				this.aux.push(this.infoTotal.descontos);
			}
			else {
				this.aux = this.infoTotal.descontos.split(",")
			}
			for (i = 0; i < this.aux.length; i++) {
				instance = this.aux[i].split(";");
				this.ids.push(parseInt(instance[0]));
				instance2 = instance[1].split("$");
				this.notes.push({ "price": +instance2[0], "description": instance2[1] })
				this.discounts += +instance2[0];
			}
		}
	}

	ionViewWillLeave() {
		var i = 0;
		var instance = "";
		var virgula = ",";

		if (this.notes.length != 0) {
			instance = String(this.ids[0]) + ";" + String(this.notes[0]["price"]) + "$" + this.notes[0]["description"];
		}

		this.infoTotal.descontos = instance;

		for (i = 1; i < this.notes.length; i++) {
			instance = String(this.ids[i]) + ";" + String(this.notes[i]["price"]) + "$" + this.notes[i]["description"];
			this.infoTotal.descontos = this.infoTotal.descontos.concat(virgula + instance);
			console.log(this.infoTotal.descontos);
			this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
		}

		console.log(this.infoTotal.descontos)
	}

	originalPrice() {
		this.inicialprice = +this.infoTotal.price.replace("R$ ", "").replace(".", "");
	}

	editPrice() {

		let prompt = this.alertCtrl.create({
			title: 'Editar Preço Inicial',
			inputs: [
				{
					placeholder: 'Preço',
					name: 'price',
					type: 'number'
				}
			],
			buttons: [
				{
					text: 'Cancelar'
				},
				{
					text: 'Salvar',
					handler: data => {
						this.inicialprice = data.price;
					}
				}
			]
		});

		prompt.present();

	}

	addNote(id) {

		let prompt = this.alertCtrl.create({
			title: 'Adicionar Item',
			inputs: [
				{
					placeholder: 'Descrição',
					name: 'description'
				},
				{
					placeholder: 'Preço',
					name: 'price',
					type: 'number'
				}
			],
			buttons: [
				{
					text: 'Cancelar'
				},
				{
					text: 'Adicionar',
					handler: data => {
						this.notes.push(data);
						this.ids.push(id);
						this.discounts += +data.price;
					}
				}
			]
		});

		prompt.present();
	}

	editNote(note) {

		let prompt = this.alertCtrl.create({
			title: 'Editar Item',
			inputs: [
				{
					placeholder: 'Descrição',
					name: 'description'
				},
				{
					placeholder: 'Preço',
					name: 'price',
					type: 'number'
				}
			],
			buttons: [
				{
					text: 'Cancelar'
				},
				{
					text: 'Salvar',
					handler: data => {
						let index = this.notes.indexOf(note);
						this.discounts -= note.price;

						if (index > -1) {
							this.notes[index] = data;
							this.discounts += +data.price;
						}
					}
				}
			]
		});

		prompt.present();

	}

	deleteNote(note) {

		let index = this.notes.indexOf(note);
		this.discounts -= +note.price;

		if (index > -1) {
			this.notes.splice(index, 1);
			this.ids.splice(index, 1);
		}
	}

	changeNote(event, note) {

		let prompt = this.alertCtrl.create({
			title: 'Desconto',
			subTitle: 'Editar ou excluir desconto?',
			cssClass: 'alertChange',
			buttons: [
				{
					text: 'Editar',
					handler: () => {
						this.editNote(note);
					}
				},
				{
					text: 'Excluir',
					handler: () => {
						this.deleteNote(note);
					}
				},
				{
					text: 'Cancelar'
				}
			]
		});

		prompt.present();

	}
}
