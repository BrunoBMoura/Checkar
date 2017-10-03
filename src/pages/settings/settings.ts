import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage'
import { FavoritesPage } from "../favorites/favorites"

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public nav: NavController, private storage:Storage) {
    this.nav = nav;
  }

  go2about(){
    this.nav.push(AboutPage)
  }

  clearStorage(){
    this.storage.clear();
    this.nav.push(FavoritesPage);
  }
}
