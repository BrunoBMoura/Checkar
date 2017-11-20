import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { NavController } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings'
import { ShowCarPage } from '../pages/showCar/showCar'
import { FavoritesPage } from '../pages/favorites/favorites'
import { CameraPage } from '../pages/camera/camera'
import { DiscountsPage } from '../pages/discounts/discounts'
import { ChartsPage } from '../pages/charts/charts'
import { ShowFavPage } from '../pages/showFav/showFav'
import { CreateDiscountPage } from '../pages/create-discount/create-discount'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarInfoProvider } from '../providers/carInfo/carInfo';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingsPage,
    ShowCarPage,
    FavoritesPage,
    CameraPage,
    DiscountsPage,
    ChartsPage,
    ShowFavPage,
    CreateDiscountPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingsPage,
    ShowCarPage,
    FavoritesPage,
    CameraPage,
    DiscountsPage,
    ChartsPage,
    ShowFavPage,
    CreateDiscountPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarInfoProvider,
    Camera,
    FileTransfer,
    FileTransferObject,
    File,
    HTTP,
    Geolocation,
  ]
})
export class AppModule {}
