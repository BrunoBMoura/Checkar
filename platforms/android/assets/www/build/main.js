webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.dataArray = [];
        this.navCtrl = navCtrl;
        this.carInfo = this.navParams.data;
    }
    /*ionViewWillEnter(){
      this.storage.get('primeiro').then((val) => {
        if(val != null){
          this.carInfo = JSON.parse(val);
        }
      });
    }*/
    FavoritesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var value, aux;
        this.storage.forEach(function (value) {
            aux = JSON.parse(value);
            _this.dataArray.push(aux);
        });
        console.log("Número de itens armazenados: ", this.storage.length());
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/favorites/favorites.html"*/'<ion-header height=\'80px\'>\n    <ion-navbar color=\'dark\'>\n        <ion-title>\n            Lembra desses?\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n      \n<ion-content  *ngFor = "let i of dataArray" class="cards-bg">\n     <!--    \n    <ion-card>  \n        <img src="http://www.mdesterro.com.br/public/imagens/racks02/foto2.jpg"/>\n                \n        <ion-card-content>\n        <ion-card-title>\n            TDA-4572\n        </ion-card-title>\n        <p>\n            Uninho com escada absurdo do mascote, a terceira corta em 180.\n        </p>\n        </ion-card-content>\n                \n        <button ion-button clear block color="danger" icon-start>\n        <ion-icon name=\'cash\'></ion-icon>\n        QUERO VER!\n        </button>\n    </ion-card>\n    -->\n    <ion-card>  \n        <img src={{i.foto}}/>\n                \n        <ion-card-content>\n        <ion-card-title>\n            {{i.placa}}\n        </ion-card-title>\n        <p>\n            {{i.marca}}\n        </p>\n        </ion-card-content>\n                \n        <button ion-button clear block color="danger" icon-start>\n        <ion-icon name=\'cash\'></ion-icon>\n        QUERO VER!\n        </button>\n    </ion-card> \n                \n</ion-content>'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/favorites/favorites.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showCar_showCar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_camera__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(nav, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
    }
    HomePage.prototype.changePageToSettings = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.changePageToFavorites = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__favorites_favorites__["a" /* FavoritesPage */]);
    };
    HomePage.prototype.changePageToCameraPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__camera_camera__["a" /* CameraPage */]);
    };
    HomePage.prototype.Search = function (placa) {
        var _this = this;
        this.placa = placa;
        var alert = this.alertCtrl.create({
            title: 'Placa a ser pesquisada:',
            subTitle: this.placa,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.Loading();
                    }
                },
                {
                    text: 'Tentar novamente',
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.Loading = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__showCar_showCar__["a" /* ShowCarPage */], this.placa);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color = \'dark\'> <!--ion-navbar transparent-->\n    <ion-title>\n      <div text-center>\n        <ion-icon color = \'amarelo\' name=\'md-car\'></ion-icon>\n        <strong>CheckCar</strong>\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n\n  <form (ngSubmit) = "Search(placa)" class="search">\n    <ion-item>\n      <!-- separar em entrada de texte e dps numerica -->\n      <!-- <input type=number style="-webkit-text-security:disc;" ng-model="loginData.pincode"></input>-->\n      <!-- <ion-input placeholder="ABC" type="text" pattern="[a-zA-Z]*" name= "placa" [(ngModel)]=\'placa\'></ion-input> -->\n      <!-- <ion-input placeholder="1234" type="number" pattern="[0-9]*" name= "placa" [(ngModel)]=\'placa\'></ion-input> -->\n      <ion-input placeholder="ABC1234" type="text" name= "placa" [(ngModel)]=\'placa\'></ion-input>\n    </ion-item>\n    <div padding>\n      <button ion-button icon-left type= "submit" class= "button button-block button-positive" color = \'dark\'>\n        <ion-icon color = \'amarelo\' name="search"></ion-icon>\n        Procurar\n      </button>\n    </div>\n  </form>\n  \n  <ion-fab bottom center>\n    <button ion-fab color = \'pretot\'><ion-icon name="more"></ion-icon></button>\n    <ion-fab-list side = \'top\'>\n      <form (ngSubmit) = "changePageToFavorites()">\n        <button ion-fab color = \'pretot\'><ion-icon name="md-heart" color=\'amarelo\'></ion-icon></button>\n      </form> \n    </ion-fab-list>\n\n    <ion-fab-list side = \'left\'>\n      <form (ngSubmit) = "changePageToCameraPage()">\n        <button ion-fab color = \'pretot\'><ion-icon name="md-camera" color=\'amarelo\'></ion-icon></button>\n      </form> \n    </ion-fab-list>\n\n    <ion-fab-list side = \'right\'>\n      <form (ngSubmit) = "changePageToSettings()">\n        <button ion-fab color = \'pretot\'><ion-icon name="md-options" color=\'amarelo\'></ion-icon></button>\n      </form> \n    </ion-fab-list>\n  </ion-fab>\n  \n</ion-content>\n  '/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carInfo_carInfo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_charts__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discounts_discounts__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorites_favorites__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShowCarPage = (function () {
    function ShowCarPage(navController, navParams, carInfo, storage) {
        this.navController = navController;
        this.navParams = navParams;
        this.carInfo = carInfo;
        this.storage = storage;
        this.displayInfo();
    }
    ShowCarPage.prototype.SaveInfo = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_5__favorites_favorites__["a" /* FavoritesPage */], this.infoTotal);
    };
    ShowCarPage.prototype.displayInfo = function () {
        this.placa = this.navParams.data;
    };
    ShowCarPage.prototype.changePageToCharts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__charts_charts__["a" /* ChartsPage */]);
    };
    ShowCarPage.prototype.changePageToDiscounts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__discounts_discounts__["a" /* DiscountsPage */]);
    };
    ShowCarPage.prototype.saveInfo = function () {
        this.storage.set('infoTotal.placa', JSON.stringify(this.infoTotal));
        console.log("Inserido: ", this.infoTotal);
        console.log("Tamanho do storage: ", this.storage.length());
        console.log("Número de chaves: ", this.storage.keys());
    };
    ShowCarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.carInfo.getInfo(this.placa).subscribe(function (info) {
            _this.infoTotal = {
                marca: info.brand,
                ano: info.model_year,
                placa: info.plate,
                price: info.preco,
                foto: info.foto,
                saveplaca: _this.placa
            };
        });
    };
    return ShowCarPage;
}());
ShowCarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-showCar',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/showCar/showCar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Informações\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding class="content">\n\n    <ion-grid *ngIf="infoTotal" class="grid">\n\n        \n\n        <ion-card>\n\n            <ion-list class="lista">\n\n                <ion-item class=\'carimage\'>\n\n                     <div class="foto_carro"><img src = "{{infoTotal.foto}}" alt=""> </div>\n\n                </ion-item>\n\n\n\n                <ion-item class = "item1">\n\n                    <strong class="modelo"> Modelo: </strong> {{infoTotal.marca}} \n\n                </ion-item>\n\n                <ion-item class = "item2">\n\n                    <strong class="ano"> Ano: </strong> {{infoTotal.ano}}\n\n                </ion-item>\n\n                <ion-item class = "item3">\n\n                    <strong class="placa"> Placa: </strong> {{infoTotal.placa}}\n\n                </ion-item>\n\n                <ion-item (click)="changePageToDiscounts()" class = "item4">\n\n                    <strong class="preco"> Preço: </strong> {{infoTotal.price}} \n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card>\n\n\n\n        <div padding>\n\n            <ion-fab center>\n\n                <button ion-fab icon-only class = "tabela" (click)="changePageToDiscounts()"> \n\n                    <ion-icon name = "clipboard" color="dark"></ion-icon>\n\n                </button> \n\n            </ion-fab>\n\n            <ion-fab left>\n\n                <button ion-fab icon-only class = "historico" (click)="changePageToCharts()">\n\n                    <ion-icon name = "stats" color="secondary"></ion-icon>\n\n                </button>\n\n            </ion-fab>\n\n            <ion-fab right> \n\n                <button ion-fab icon-only class = "favorito" (click)="saveInfo()">\n\n                    <ion-icon name = "heart" color="vermelhoEscuro"></ion-icon>\n\n                </button>\n\n            </ion-fab>\n\n        </div>\n\n\n\n    </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/showCar/showCar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carInfo_carInfo__["a" /* CarInfoProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], ShowCarPage);

//# sourceMappingURL=showCar.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarInfoProvider = (function () {
    function CarInfoProvider(http) {
        this.http = http;
        //console.log('Hello CarInfoProvider Provider');
        this.url = 'http://checkcar.us-east-1.elasticbeanstalk.com';
    }
    CarInfoProvider.prototype.getInfo = function (placaCarro) {
        return this.http.get(this.url + '/' + placaCarro).map(function (res) { return res.json(); });
    };
    return CarInfoProvider;
}());
CarInfoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CarInfoProvider);

//# sourceMappingURL=carInfo.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DiscountsPage = (function () {
    function DiscountsPage() {
    }
    return DiscountsPage;
}());
DiscountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'discounts',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/discounts/discounts.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Como está o carro?\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header>\n\n              -R$500,00\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            Tá batido uai.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n            <ion-card-header>\n\n                  -R$250,00\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                Não gostei do dono!\n\n            </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n            <ion-card-header>\n\n                  -R$100,00\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                    Vai ser complicado de vender...\n\n            </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-footer>\n\n        <ion-toolbar color="light">\n\n            <p><strong><font color = "#2ecc71"> R$100.000,00 </font></strong></p>\n\n            <ion-buttons end>\n\n                <button ion-button icon-right color="green">\n\n                    <ion-icon name="add"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n        </ion-toolbar>\n\n    </ion-footer>\n\n</ion-content>'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/discounts/discounts.html"*/
    })
], DiscountsPage);

//# sourceMappingURL=discounts.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
        this.nav = nav;
    }
    SettingsPage.prototype.go2about = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title> \n        Configurações \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list inset>\n      <ion-item (click)="go2about()">\n        <strong>Sobre</strong>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/about/about.html"*/'<ion-header height=\'80px\'>\n  <ion-navbar color=\'dark\'>\n    <ion-title>\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n	<ion-list>\n			<ion-item>\n					<strong> Checkcar </strong>	\n			</ion-item>	\n			<ion-item>\n					<strong> Versão: </strong> 1.0.0\n			</ion-item>\n			<ion-item>\n				<strong>Desenvolvedores <ion-icon name="ios-beer-outline"></ion-icon></strong>\n					<ion-item>\n						<br/>Bruno Bernardo de Moura<br/>\n						<br/>Gabriel Borin <br/>\n						<br/>Rafael Lëinio<br/>\n						<br/>Ricardo Elizeu Neto <br/>\n						<br/>Thiago Akinori Sato <br/>\n						<br/>Victor Lucio<br/>\n					</ion-item>\n			</ion-item>\n		</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraPage = (function () {
    function CameraPage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
    }
    CameraPage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/camera/camera.html"*/'<ion-header height=\'80px\'>\n    <ion-navbar color=\'dark\'>\n        <ion-title>\n            Camera\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n      \n<ion-content padding>\n    <button ion-button color="light">Picture</button>\n</ion-content>'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/camera/camera.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_showCar_showCar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_discounts_discounts__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_carInfo_carInfo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_showCar_showCar__["a" /* ShowCarPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_discounts_discounts__["a" /* DiscountsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_showCar_showCar__["a" /* ShowCarPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_discounts_discounts__["a" /* DiscountsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_carInfo_carInfo__["a" /* CarInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsPage = (function () {
    function ChartsPage() {
    }
    return ChartsPage;
}());
ChartsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-charts',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/charts/charts.html"*/'<ion-header> \n\n	<ion-navbar>\n\n		<ion-title>\n\n			Gráfico\n\n		</ion-title>	\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	\n\n	\n\n</ion-content>'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/charts/charts.html"*/
    })
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/borin/Documentos/Checkar/src/pages/contact/contact.html"*/'<ion-header height=\'80px\'>\n  <ion-navbar color=\'dark\'>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/borin/Documentos/Checkar/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map