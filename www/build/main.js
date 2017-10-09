webpackJsonp([1],{

/***/ 101:
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
        selector: 'page-charts',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\charts\charts.html"*/'<ion-header> \n\n	<ion-navbar>\n\n		<ion-title>\n\n			Gráfico\n\n		</ion-title>	\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	\n\n	\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\charts\charts.html"*/
    })
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_discount_create_discount__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscountsPage = (function () {
    function DiscountsPage(navParams, storage, navController, alertCtrl) {
        this.navParams = navParams;
        this.storage = storage;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.discountsArray = [];
        this.aux = [];
        this.infoTotal = this.navParams.data;
    }
    DiscountsPage.prototype.ionViewWillEnter = function () {
        this.discountsArray = [];
        var i = 0;
        var instance;
        if (this.infoTotal.descontos != "") {
            console.log(this.infoTotal.descontos);
            this.aux = this.infoTotal.descontos.split(",");
            for (i = 0; i < this.aux.length; i++) {
                instance = this.aux[i].split("$");
                this.discountsArray.push({ "value": instance[0], "description": instance[1] });
            }
        }
    };
    DiscountsPage.prototype.ready = function () {
        this.navController.pop();
    };
    DiscountsPage.prototype.createDiscount = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__create_discount_create_discount__["a" /* CreateDiscountPage */], this.infoTotal);
    };
    DiscountsPage.prototype.pressEvent = function (e, i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Deletar desconto?:',
            subTitle: "-R$" + i.value + ",00",
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.deleteDiscount(i);
                    }
                },
                {
                    text: 'Não',
                }
            ]
        });
        alert.present();
    };
    DiscountsPage.prototype.deleteDiscount = function (i) {
        var uglify = i["value"] + "\\$" + i["description"];
        var virgula = ",";
        if (this.infoTotal.descontos.search(uglify) == 0)
            virgula = "";
        var final = (virgula + uglify).replace("\\", "");
        this.infoTotal.descontos = this.infoTotal.descontos.replace(final, "");
        console.log(this.infoTotal.descontos);
        this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
    };
    return DiscountsPage;
}());
DiscountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'discounts',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\discounts\discounts.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Como está o carro?\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding>\n\n    <ion-card *ngFor = "let i of discountsArray" (press)="pressEvent($event, i)">\n\n        <ion-card-header>\n\n            -R${{i.value}}.00\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            {{i.description}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <button ion-button full color="green" (click)="ready()">Já descontei tudo!</button>\n\n\n\n    <ion-footer>\n\n        <ion-toolbar color="light">\n\n            <div class=\'price\'><strong><font color = "#2ecc71"> R${{infoTotal.preco}} </font></strong></div>\n\n            <ion-buttons end>\n\n                <button ion-button icon-right color="green" (click)="createDiscount()">\n\n                    <ion-icon name="add"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n        </ion-toolbar>\n\n    </ion-footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\discounts\discounts.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], DiscountsPage);

var _a, _b, _c, _d;
//# sourceMappingURL=discounts.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDiscountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreateDiscountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateDiscountPage = (function () {
    function CreateDiscountPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.infoTotal = this.navParams.data;
    }
    CreateDiscountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateDiscountPage');
    };
    CreateDiscountPage.prototype.ready = function () {
        var virgula = ",";
        if (this.infoTotal.descontos == "")
            virgula = "";
        this.infoTotal.descontos = this.infoTotal.descontos.concat(virgula + String(this.desconto) + "$" + this.descricao);
        console.log(this.infoTotal.descontos);
        this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
        this.navCtrl.pop();
    };
    return CreateDiscountPage;
}());
CreateDiscountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-discount',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\create-discount\create-discount.html"*/'<!--\n\n  Generated template for the CreateDiscountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Criar Desconto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n        \n\n    <ion-item>\n\n        <ion-label fixed>Desconto</ion-label>\n\n    	<ion-input type="number" value="-R$"  [(ngModel)]="desconto"></ion-input>\n\n	</ion-item>\n\n        \n\n    <ion-item>\n\n        <ion-label fixed>Descrição</ion-label>\n\n        <ion-input type="text" [(ngModel)]="descricao"></ion-input>\n\n	</ion-item>\n\n	<button ion-button full color="green" (click)="ready()">Descontar!</button>\n\n        \n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\create-discount\create-discount.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
], CreateDiscountPage);

var _a, _b, _c;
//# sourceMappingURL=create-discount.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-discount/create-discount.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showCar_showCar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_camera__ = __webpack_require__(204);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color = \'dark\'> <!--ion-navbar transparent-->\n\n    <ion-title>\n\n      <div text-center>\n\n        <ion-icon color = \'amarelo\' name=\'md-car\'></ion-icon>\n\n        <strong>CheckCar</strong>\n\n      </div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-image">\n\n\n\n  <form (ngSubmit) = "Search(placa)" class="search">\n\n    <ion-item>\n\n      <!-- separar em entrada de texte e dps numerica -->\n\n      <!-- <input type=number style="-webkit-text-security:disc;" ng-model="loginData.pincode"></input>-->\n\n      <!-- <ion-input placeholder="ABC" type="text" pattern="[a-zA-Z]*" name= "placa" [(ngModel)]=\'placa\'></ion-input> -->\n\n      <!-- <ion-input placeholder="1234" type="number" pattern="[0-9]*" name= "placa" [(ngModel)]=\'placa\'></ion-input> -->\n\n      <ion-input placeholder="PLACA" type="text" name= "placa" [(ngModel)]=\'placa\'></ion-input>\n\n    </ion-item>\n\n    <div padding>\n\n      <button ion-button icon-left type= "submit" class= "button button-block button-positive" color = \'dark\'>\n\n        <ion-icon color = \'amarelo\' name="search"></ion-icon>\n\n        Procurar\n\n      </button>\n\n    </div>\n\n  </form>\n\n  \n\n  <ion-fab bottom center>\n\n    <button ion-fab color = \'pretot\'><ion-icon name="more"></ion-icon></button>\n\n    <ion-fab-list side = \'top\'>\n\n      <form (ngSubmit) = "changePageToFavorites()">\n\n        <button ion-fab color = \'pretot\'><ion-icon name="md-heart" color=\'amarelo\'></ion-icon></button>\n\n      </form> \n\n    </ion-fab-list>\n\n\n\n    <ion-fab-list side = \'left\'>\n\n      <form (ngSubmit) = "changePageToCameraPage()">\n\n        <button ion-fab color = \'pretot\'><ion-icon name="md-camera" color=\'amarelo\'></ion-icon></button>\n\n      </form> \n\n    </ion-fab-list>\n\n\n\n    <ion-fab-list side = \'right\'>\n\n      <form (ngSubmit) = "changePageToSettings()">\n\n        <button ion-fab color = \'pretot\'><ion-icon name="md-options" color=\'amarelo\'></ion-icon></button>\n\n      </form> \n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  \n\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carInfo_carInfo__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_charts__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discounts_discounts__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
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
    ShowCarPage.prototype.displayInfo = function () {
        this.placa = this.navParams.data;
    };
    ShowCarPage.prototype.changePageToCharts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__charts_charts__["a" /* ChartsPage */]);
    };
    ShowCarPage.prototype.changePageToDiscounts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__discounts_discounts__["a" /* DiscountsPage */], this.infoTotal);
    };
    ShowCarPage.prototype.saveInfo = function () {
        this.infoTotal.descontos = "";
        this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
        console.log("Inserido: ", this.infoTotal);
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
                descontos: ""
            };
        });
    };
    return ShowCarPage;
}());
ShowCarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-showCar',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\showCar\showCar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Informações\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding class="content">\n\n    <ion-grid *ngIf="infoTotal" class="grid">\n\n        \n\n        <ion-card>\n\n            <ion-list class="lista">\n\n                <ion-item class=\'carimage\'>\n\n                     <div class="foto_carro"><img src = "{{infoTotal.foto}}" alt=""> </div>\n\n                </ion-item>\n\n\n\n                <ion-item class = "item1">\n\n                    <strong class="modelo"> Modelo: </strong> {{infoTotal.marca}} \n\n                </ion-item>\n\n                <ion-item class = "item2">\n\n                    <strong class="ano"> Ano: </strong> {{infoTotal.ano}}\n\n                </ion-item>\n\n                <ion-item class = "item3">\n\n                    <strong class="placa"> Placa: </strong> {{infoTotal.placa}}\n\n                </ion-item>\n\n                <ion-item (click)="changePageToDiscounts()" class = "item4">\n\n                    <strong class="preco"> Preço: </strong> {{infoTotal.price}} \n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card>\n\n\n\n        <div padding>\n\n            <ion-fab center>\n\n                <button ion-fab icon-only class = "tabela" (click)="changePageToDiscounts()"> \n\n                    <ion-icon name = "clipboard" color="dark"></ion-icon>\n\n                </button> \n\n            </ion-fab>\n\n            <ion-fab left>\n\n                <button ion-fab icon-only class = "historico" (click)="changePageToCharts()">\n\n                    <ion-icon name = "stats" color="secondary"></ion-icon>\n\n                </button>\n\n            </ion-fab>\n\n            <ion-fab right> \n\n                <button ion-fab icon-only class = "favorito" (click)="saveInfo()">\n\n                    <ion-icon name = "heart" color="vermelhoEscuro"></ion-icon>\n\n                </button>\n\n            </ion-fab>\n\n        </div>\n\n\n\n    </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\showCar\showCar.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_carInfo_carInfo__["a" /* CarInfoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_carInfo_carInfo__["a" /* CarInfoProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], ShowCarPage);

var _a, _b, _c, _d;
//# sourceMappingURL=showCar.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(277);
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
        this.url = 'https://checkcarapp.herokuapp.com';
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(28);
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
    function SettingsPage(nav, storage) {
        this.nav = nav;
        this.storage = storage;
        this.nav = nav;
    }
    SettingsPage.prototype.go2about = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    SettingsPage.prototype.clearStorage = function () {
        this.storage.clear();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    	<ion-title> \n\n    	Configurações \n\n    	</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n  \n\n	<ion-content padding>\n\n    	<ion-list inset>\n\n      		<ion-item (click)="go2about()">\n\n    			<button ion-button full color="light">Sobre</button>\n\n			</ion-item>\n\n			<strong>Memory</strong>\n\n    		<ion-item (click)="clearStorage()">\n\n    			<button ion-button full color="light">clear</button>\n\n      		</ion-item>\n\n    	</ion-list>\n\n  	</ion-content>\n\n  '/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\about\about.html"*/'<ion-header height=\'80px\'>\n\n  <ion-navbar color=\'dark\'>\n\n    <ion-title>\n\n      Sobre\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	\n\n	<ion-list>\n\n			<ion-item>\n\n					<strong> Checkcar </strong>	\n\n			</ion-item>	\n\n			<ion-item>\n\n					<strong> Versão: </strong> 1.0.0\n\n			</ion-item>\n\n			<ion-item>\n\n				<strong>Desenvolvedores <ion-icon name="ios-beer-outline"></ion-icon></strong>\n\n					<ion-item>\n\n						<br/>Bruno Bernardo de Moura<br/>\n\n						<br/>Gabriel Borin <br/>\n\n						<br/>Rafael Lëinio<br/>\n\n						<br/>Ricardo Elizeu Neto <br/>\n\n						<br/>Thiago Akinori Sato <br/>\n\n						<br/>Victor Lucio<br/>\n\n					</ion-item>\n\n			</ion-item>\n\n		</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__showFav_showFav__ = __webpack_require__(203);
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
    FavoritesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var value, aux;
        this.storage.forEach(function (value) {
            aux = JSON.parse(value);
            _this.dataArray.push(aux);
        });
        console.log(this.storage.keys());
    };
    FavoritesPage.prototype.sendInfoToFav = function (i) {
        this.dataArray = [];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__showFav_showFav__["a" /* ShowFavPage */], i);
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\favorites\favorites.html"*/'<ion-header height=\'80px\'>\n\n    <ion-navbar color=\'dark\'>\n\n        <ion-title>\n\n            Lembra desses?\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content class="cards-bg">\n\n     <!--    \n\n    <ion-card>  \n\n        <img src="http://www.mdesterro.com.br/public/imagens/racks02/foto2.jpg"/>\n\n                \n\n        <ion-card-content>\n\n        <ion-card-title>\n\n            TDA-4572\n\n        </ion-card-title>\n\n        <p>\n\n            Uninho com escada absurdo do mascote, a terceira corta em 180.\n\n        </p>\n\n        </ion-card-content>\n\n                \n\n        <button ion-button clear block color="danger" icon-start>\n\n        <ion-icon name=\'cash\'></ion-icon>\n\n        QUERO VER!\n\n        </button>\n\n    </ion-card>\n\n    -->\n\n    <ion-card *ngFor = "let i of dataArray">  \n\n        <img src={{i.foto}}/>\n\n                \n\n        <ion-card-content>\n\n        <ion-card-title>\n\n            {{i.placa}}\n\n        </ion-card-title>\n\n        <p>\n\n            {{i.marca}}\n\n        </p>\n\n        </ion-card-content>\n\n        <form (ngSubmit) = \'sendInfoToFav(i)\'>       \n\n        <button ion-button clear block color="danger" icon-start>\n\n        <ion-icon name=\'cash\'></ion-icon>\n\n        QUERO VER!\n\n        </button>\n\n        </form>\n\n    </ion-card> \n\n                \n\n</ion-content>'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\favorites\favorites.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
], FavoritesPage);

var _a, _b, _c;
//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowFavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_charts__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discounts_discounts__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShowFavPage = (function () {
    function ShowFavPage(navController, navParams, storage) {
        this.navController = navController;
        this.navParams = navParams;
        this.storage = storage;
        this.Info();
    }
    ShowFavPage.prototype.Info = function () {
        this.info = this.navParams.data;
        console.log(this.info);
    };
    ShowFavPage.prototype.changePageToCharts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__charts_charts__["a" /* ChartsPage */]);
    };
    ShowFavPage.prototype.changePageToDiscounts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__discounts_discounts__["a" /* DiscountsPage */], this.info);
    };
    ShowFavPage.prototype.deleteInfo = function () {
        console.log("remover: ", this.info.placa);
        this.storage.remove(this.info.placa);
        this.navController.pop();
    };
    return ShowFavPage;
}());
ShowFavPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-showFav',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\showFav\showFav.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Informações \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding class="content">\n\n\n\n    <ion-grid *ngIf="info">\n\n            <ion-card>\n\n                    <ion-list class="lista">\n\n                        <ion-item class=\'carimage\'>\n\n                             <div class="foto_carro"><img src = "{{info.foto}}" alt=""> </div>\n\n                        </ion-item>\n\n\n\n                        <ion-item class = "item1">\n\n                            <strong class="modelo"> Modelo: </strong> {{info.marca}} \n\n                        </ion-item>\n\n                        <ion-item class = "item2">\n\n                            <strong class="ano"> Ano: </strong> {{info.ano}}\n\n                        </ion-item>\n\n                        <ion-item class = "item3">\n\n                            <strong class="placa"> Placa: </strong> {{info.placa}}\n\n                        </ion-item>\n\n                        <ion-item (click)="changePageToDiscounts()" class = "item4">\n\n                            <strong class="preco"> Preço: </strong> {{info.price}} \n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-card>\n\n\n\n                <div padding>\n\n                    <ion-fab center>\n\n                        <button ion-fab icon-only class = "tabela" (click)="changePageToDiscounts()"> \n\n                            <ion-icon name = "clipboard" color="dark"></ion-icon>\n\n                        </button> \n\n                    </ion-fab>\n\n                    <ion-fab left>\n\n                        <button ion-fab icon-only class = "historico" (click)="changePageToCharts()">\n\n                            <ion-icon name = "stats" color="secondary"></ion-icon>\n\n                        </button>\n\n                    </ion-fab>\n\n                    <ion-fab right> \n\n                        <button ion-fab icon-only class = "favorito" (click)="deleteInfo()">\n\n                            <ion-icon name = "trash" color="vermelhoEscuro"></ion-icon>\n\n                        </button>\n\n                    </ion-fab>\n\n                </div>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\showFav\showFav.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
], ShowFavPage);

var _a, _b, _c;
//# sourceMappingURL=showFav.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(205);
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
        selector: 'page-camera',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\camera\camera.html"*/'<ion-header height=\'80px\'>\n\n    <ion-navbar color=\'dark\'>\n\n        <ion-title>\n\n            Camera\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding>\n\n    <button ion-button color="light">Picture</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\camera\camera.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_showCar_showCar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_discounts_discounts__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_charts_charts__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_showFav_showFav__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_discount_create_discount__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_carInfo_carInfo__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(205);
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
            __WEBPACK_IMPORTED_MODULE_14__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_showFav_showFav__["a" /* ShowFavPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_create_discount_create_discount__["a" /* CreateDiscountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/create-discount/create-discount.module#CreateDiscountPageModule', name: 'CreateDiscountPage', segment: 'create-discount', priority: 'low', defaultHistory: [] }
                ]
            }),
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
            __WEBPACK_IMPORTED_MODULE_13__pages_discounts_discounts__["a" /* DiscountsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_showFav_showFav__["a" /* ShowFavPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_create_discount_create_discount__["a" /* CreateDiscountPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_carInfo_carInfo__["a" /* CarInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\contact\contact.html"*/'<ion-header height=\'80px\'>\n\n  <ion-navbar color=\'dark\'>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Pichau\Desktop\Projetos\Checkar\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map