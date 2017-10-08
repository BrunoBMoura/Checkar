import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

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
    }

  constructor(private navController: NavController,
              private navParams: NavParams) {
                this.Info();
  }
  Info(){
    this.info = this.navParams.data;
  }

}