webpackJsonp([1],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carInfo_carInfo__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_charts__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discounts_discounts__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(111);
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
    function ShowCarPage(navController, navParams, carInfo, storage, geolocation, loadingCtrl, http) {
        this.navController = navController;
        this.navParams = navParams;
        this.carInfo = carInfo;
        this.storage = storage;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.displayInfo();
    }
    ShowCarPage.prototype.displayInfo = function () {
        this.placa = this.navParams.data;
    };
    ShowCarPage.prototype.changePageToCharts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__charts_charts__["a" /* ChartsPage */], this.infoTotal);
    };
    ShowCarPage.prototype.changePageToDiscounts = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__discounts_discounts__["a" /* DiscountsPage */], this.infoTotal);
    };
    ShowCarPage.prototype.saveInfo = function () {
        //this.infoTotal.descontos="";
        this.storage.set(this.infoTotal.placa, JSON.stringify(this.infoTotal));
        console.log("Inserido: ", this.infoTotal);
    };
    ShowCarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        this.carInfo.getInfo(this.placa).subscribe(function (info) {
            _this.infoTotal = {
                marca: info.brand,
                ano: info.model_year,
                placa: info.plate,
                price: info.preco,
                foto: info.foto,
                descontos: "",
                anos: info.anos,
                precos: info.precos
            };
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.http.post('http://172.21.219.210:5000/geo', { lat: resp.coords.latitude, lon: resp.coords.longitude }, {})
                .then(function (data) {
                console.log(data.headers);
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    return ShowCarPage;
}());
ShowCarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-showCar',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\showCar\showCar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Informações\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding class="content">\n\n    <ion-grid *ngIf="infoTotal" class="grid">\n\n        \n\n        <ion-card>\n\n            <ion-list class="lista">\n\n                <ion-item class=\'carimage\'>\n\n                     <div class="foto_carro"><img src = "{{infoTotal.foto}}" alt=""> </div>\n\n                </ion-item>\n\n\n\n                <ion-item class = "item1">\n\n                    <strong class="modelo"> Modelo: </strong> {{infoTotal.marca}} \n\n                </ion-item>\n\n                <ion-item class = "item2">\n\n                    <strong class="ano"> Ano: </strong> {{infoTotal.ano}}\n\n                </ion-item>\n\n                <ion-item class = "item3">\n\n                    <strong class="placa"> Placa: </strong> {{infoTotal.placa}}\n\n                </ion-item>\n\n                <ion-item (click)="changePageToDiscounts()" class = "item4">\n\n                    <strong class="preco"> Preço: </strong> {{infoTotal.price}} \n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card>\n\n\n\n        <div padding>\n\n            <ion-fab center>\n\n                <button ion-fab icon-only class = "tabela" (click)="changePageToDiscounts()"> \n\n                    <ion-icon name = "clipboard" color="dark"></ion-icon>\n\n                </button> \n\n            </ion-fab>\n\n            <ion-fab left>\n\n                <button ion-fab icon-only class = "historico" (click)="changePageToCharts()">\n\n                    <ion-icon name = "stats" color="secondary"></ion-icon>\n\n                </button>\n\n            </ion-fab>\n\n            <ion-fab right> \n\n                <button ion-fab icon-only class = "favorito" (click)="saveInfo()">\n\n                    <ion-icon name = "heart" color="vermelhoEscuro"></ion-icon>\n\n                </button>\n\n            </ion-fab>\n\n        </div>\n\n\n\n    </ion-grid>    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\showCar\showCar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carInfo_carInfo__["a" /* CarInfoProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */]])
], ShowCarPage);

//# sourceMappingURL=showCar.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
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



var ChartsPage = (function () {
    function ChartsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.precos = [];
        this.lineChartData = [
            { data: this.precos, label: '' }
        ];
        this.lineChartLabels = this.labelanos;
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.info = this.navParams.data;
    }
    ChartsPage.prototype.ionViewWillLoad = function () {
        console.log(this.info.anos);
        this.labelanos = [];
        this.precos = [];
        var i = 0;
        for (i = 0; i < this.info.anos.length; i++) {
            if (i != this.info.anos.length - 1) {
                if (this.info.anos[i] < this.info.anos[i + 1]) {
                    this.labelanos.push(this.info.anos[i].toString());
                    this.precos.push(this.info.precos[i]);
                }
            }
            else {
                if (this.info.anos[i] == this.info.anos[i - 1] + 1) {
                    this.labelanos.push(this.info.anos[i].toString());
                    this.precos.push(this.info.precos[i]);
                }
            }
        }
        console.log(this.labelanos);
        console.log(this.precos);
        this.lineChartLabels = this.labelanos;
        this.lineChartData = [
            { data: this.precos, label: '' }
        ];
    };
    ChartsPage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ChartsPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return ChartsPage;
}());
ChartsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-charts',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\charts\charts.html"*/'<ion-header> \n\n	<ion-navbar>\n\n		<ion-title>\n\n			Gráfico de Desvalorização\n\n		</ion-title>	\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="row">\n\n		<div class="col-md-6">\n\n			<div style="display: block;">\n\n			<canvas baseChart width="300" height="400"\n\n									[datasets]="lineChartData"\n\n									[labels]="lineChartLabels"\n\n									[options]="lineChartOptions"\n\n									[colors]="lineChartColors"\n\n									[legend]="lineChartLegend"\n\n									[chartType]="lineChartType"\n\n									(chartHover)="chartHovered($event)"\n\n									(chartClick)="chartClicked($event)"></canvas>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\charts\charts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__ = __webpack_require__(207);
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
    function DiscountsPage(navCtrl, navParams, storage, navController, alertCtrl, printer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.navController = navController;
        this.alertCtrl = alertCtrl;
        this.printer = printer;
        this.slides = [
            {
                title: "Lateral",
                image: "assets/image/pngs/lateral1.png",
                id: 1
            },
            {
                title: "Frente",
                image: "assets/image/pngs/frente1.png",
                id: 2
            },
            {
                title: "Traseira",
                image: "assets/image/pngs/traseira.png",
                id: 3
            },
            {
                title: "Teto",
                image: "assets/image/pngs/teto.png",
            },
            {
                title: "Vidros",
                image: "assets/image/pngs/vidros.png",
                id: 4
            },
            {
                title: "Rodas",
                image: "assets/image/pngs/rodas.png",
                id: 5
            },
            {
                title: "Lanternas",
                image: "assets/image/pngs/lanternas.png",
                id: 6
            },
            {
                title: "Outros",
                image: "assets/image/pngs/semcor.png",
                id: 7
            }
        ];
        this.notes = [];
        this.ids = [];
        this.discounts = 0;
        this.aux = [];
        this.infoTotal = this.navParams.data;
        this.navCtrl = navCtrl;
    }
    DiscountsPage.prototype.ionViewWillEnter = function () {
        this.notes = [];
        this.aux = [];
        this.ids = [];
        var i = 0;
        var instance;
        var instance2;
        this.originalPrice();
        if (this.infoTotal.descontos != "") {
            console.log(this.infoTotal.descontos);
            if (this.infoTotal.descontos.search(/,/g) == -1) {
                this.aux.push(this.infoTotal.descontos);
            }
            else {
                this.aux = this.infoTotal.descontos.split(",");
            }
            for (i = 0; i < this.aux.length; i++) {
                instance = this.aux[i].split(";");
                this.ids.push(parseInt(instance[0]));
                instance2 = instance[1].split("$");
                this.notes.push({ "price": +instance2[0], "description": instance2[1] });
                this.discounts += +instance2[0];
            }
        }
    };
    DiscountsPage.prototype.ionViewWillLeave = function () {
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
        console.log(this.infoTotal.descontos);
    };
    DiscountsPage.prototype.originalPrice = function () {
        this.inicialprice = +this.infoTotal.price.replace("R$ ", "").replace(".", "");
    };
    DiscountsPage.prototype.editPrice = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        _this.inicialprice = data.price;
                    }
                }
            ]
        });
        prompt.present();
    };
    DiscountsPage.prototype.addNote = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        _this.notes.push(data);
                        _this.ids.push(id);
                        _this.discounts += +data.price;
                    }
                }
            ]
        });
        prompt.present();
    };
    DiscountsPage.prototype.editNote = function (note) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        var index = _this.notes.indexOf(note);
                        _this.discounts -= note.price;
                        if (index > -1) {
                            _this.notes[index] = data;
                            _this.discounts += +data.price;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    DiscountsPage.prototype.deleteNote = function (note) {
        var index = this.notes.indexOf(note);
        this.discounts -= +note.price;
        if (index > -1) {
            this.notes.splice(index, 1);
            this.ids.splice(index, 1);
        }
    };
    DiscountsPage.prototype.changeNote = function (event, note) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Desconto',
            subTitle: 'Editar ou excluir desconto?',
            cssClass: 'alertChange',
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        _this.editNote(note);
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.deleteNote(note);
                    }
                },
                {
                    text: 'Cancelar'
                }
            ]
        });
        prompt.present();
    };
    DiscountsPage.prototype.printInfo = function () {
        var page = '<h1>Hello Document</h1>'; //page teste, dps colocar pra printar tudo
        var options = {
            name: this.infoTotal.placa,
            printerId: 'printer007',
            duplex: true,
            landscape: true,
            grayscale: true
        };
        this.printer.isAvailable().then(function () {
            this.printer.print(page, options).then(function () {
                alert("printing done successfully !");
            }, function () {
                alert("Error while printing !");
            });
        }, function () {
            alert("Error while printing !");
        });
        /*this.printer.print(page, options).then(function(){
            alert("printing done successfully !");},function(){
            alert("Error while printing !");
        });*/
    };
    return DiscountsPage;
}());
DiscountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-discounts',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\discounts\discounts.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Como está o carro?\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-slides pager>\n\n        <ion-slide>\n\n            <h2 class="slide-title">Carro</h2>\n\n            <div class="ion-list-viewport">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <button ion-button clear item-start (click)="originalPrice()">\n\n                            <ion-icon name="refresh"></ion-icon>\n\n                        </button>\n\n                        Preço Inicial\n\n                        <ion-note item-end>\n\n                            R${{inicialprice}}\n\n                        </ion-note>\n\n                        <button ion-button clear item-end (click)="editPrice()">\n\n                            <ion-icon name="md-create"></ion-icon>\n\n                        </button>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </ion-slide>\n\n        <ion-slide *ngFor="let slide of slides">\n\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n            <img [src]="slide.image" class="slide-image" />\n\n            <ion-scroll scrollY="true" style="height: 100px">\n\n                <ion-list>\n\n                    <ng-container *ngFor="let note of notes">\n\n                        <ion-item *ngIf="slide.id == ids[this.notes.indexOf(note)]" (press)="changeNote($event, note)">\n\n                            <!--<button ion-button clear item-start (click)="deleteNote(note)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>-->\n\n                            {{note.description}}\n\n                            <ion-note item-end>\n\n                                -R${{note.price}}\n\n                            </ion-note>\n\n                            <!--<button ion-button clear item-end (click)="editNote(note)">\n\n                                <ion-icon name="md-create"></ion-icon>\n\n                            </button>-->\n\n                        </ion-item>\n\n                    </ng-container>\n\n                </ion-list>\n\n            </ion-scroll>\n\n            <button ion-button clear icon-end (click)="addNote(slide.id)">\n\n                Adicionar Item\n\n            </button>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <h2 class="slide-title">Tabela de Descontos</h2>\n\n            <div class="ion-list-viewport">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        Preço Inicial\n\n                        <ion-note item-end>\n\n                            R${{inicialprice}}\n\n                        </ion-note>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        Descontos\n\n                        <ion-note item-end>\n\n                            -R${{discounts}}\n\n                        </ion-note>\n\n                    </ion-item>\n\n                    <ion-item item-end>\n\n                        Preço Final\n\n                        <ion-note item-end>\n\n                            R${{inicialprice - discounts}}\n\n                        </ion-note>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <button ion-button clear icon-end (click)="printInfo()">\n\n                Gerar PDF\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\discounts\discounts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__["a" /* Printer */]])
], DiscountsPage);

//# sourceMappingURL=discounts.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-discount/create-discount.module": [
		461,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showCar_showCar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_camera__ = __webpack_require__(213);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color = \'dark\'> <!--ion-navbar transparent-->\n    <ion-title>\n      <div text-center>\n        <ion-icon color = \'amarelo\' name=\'md-car\'></ion-icon>\n        <strong>CheckCar</strong>\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n\n  <form (ngSubmit) = "Search(placa)">\n    <ion-item>\n      <!-- separar em entrada de texte e dps numerica -->\n      <!-- <input type=number style="-webkit-text-security:disc;" ng-model="loginData.pincode"></input>-->\n      <!-- <ion-input placeholder="ABC" type="text" pattern="[a-zA-Z]*" name= "placa" [(ngModel)]=\'placa\'></ion-input> -->\n      <!-- <ion-input placeholder="1234" type="number" pattern="[0-9]*" name= "placa" [(ngModel)]=\'placa\'></ion-input> -->\n      <ion-input placeholder="Digite a placa" type="text" name= "placa" [(ngModel)]=\'placa\'></ion-input>\n    </ion-item>\n    <div padding>\n      <button ion-button icon-left type= "submit" class= "button button-block button-positive" color = \'dark\'>\n        <ion-icon color = \'amarelo\' name="search"></ion-icon>\n        Procurar\n      </button>\n    </div>\n  </form>\n  \n  <ion-fab bottom center>\n    <button ion-fab color = \'pretot\'><ion-icon name="more"></ion-icon></button>\n    <ion-fab-list side = \'top\'>\n      <form (ngSubmit) = "changePageToFavorites()">\n        <button ion-fab color = \'pretot\'><ion-icon name="md-heart" color=\'amarelo\'></ion-icon></button>\n      </form> \n    </ion-fab-list>\n\n    <ion-fab-list side = \'left\'>\n      <form (ngSubmit) = "changePageToCameraPage()">\n        <button ion-fab color = \'pretot\'><ion-icon name="md-camera" color=\'amarelo\'></ion-icon></button>\n      </form> \n    </ion-fab-list>\n\n    <ion-fab-list side = \'right\'>\n      <form (ngSubmit) = "changePageToSettings()">\n        <button ion-fab color = \'pretot\'><ion-icon name="md-options" color=\'amarelo\'></ion-icon></button>\n      </form> \n    </ion-fab-list>\n  </ion-fab>\n  \n</ion-content>\n  '/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(408);
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
        this.url = 'http://172.21.219.210:5000/placa';
    }
    CarInfoProvider.prototype.getInfo = function (placaCarro) {
        return this.http.get(this.url + '/' + placaCarro).map(function (res) { return res.json(); });
    };
    return CarInfoProvider;
}());
CarInfoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CarInfoProvider);

//# sourceMappingURL=carInfo.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\settings\settings.html"*/'<ion-header>\n    <ion-navbar>\n    	<ion-title> \n    	Configurações \n    	</ion-title>\n	</ion-navbar>\n</ion-header>\n  \n	<ion-content padding>\n    	<ion-list inset>\n      		<ion-item (click)="go2about()">\n    			<button ion-button full color="light">Sobre</button>\n			</ion-item>\n			<strong>Memory</strong>\n    		<ion-item (click)="clearStorage()">\n    			<button ion-button full color="light">clear</button>\n      		</ion-item>\n    	</ion-list>\n  	</ion-content>\n  '/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 210:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\about\about.html"*/'<ion-header height=\'80px\'>\n  <ion-navbar color=\'dark\'>\n    <ion-title>\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n	<ion-list>\n			<ion-item>\n					<strong> Checkcar </strong>	\n			</ion-item>	\n			<ion-item>\n					<strong> Versão: </strong> 1.0.0\n			</ion-item>\n			<ion-item>\n				<strong>Desenvolvedores <ion-icon name="ios-beer-outline"></ion-icon></strong>\n					<ion-item>\n						<br/>Bruno Bernardo de Moura<br/>\n						<br/>Gabriel Borin <br/>\n						<br/>Rafael Lëinio<br/>\n						<br/>Ricardo Elizeu Neto <br/>\n						<br/>Thiago Akinori Sato <br/>\n						<br/>Victor Lucio<br/>\n					</ion-item>\n			</ion-item>\n		</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__showFav_showFav__ = __webpack_require__(212);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\favorites\favorites.html"*/'<ion-header height=\'80px\'>\n    <ion-navbar color=\'dark\'>\n        <ion-title>\n            Lembra desses?\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n      \n<ion-content class="cards-bg">\n     <!--    \n    <ion-card>  \n        <img src="http://www.mdesterro.com.br/public/imagens/racks02/foto2.jpg"/>\n                \n        <ion-card-content>\n        <ion-card-title>\n            TDA-4572\n        </ion-card-title>\n        <p>\n            Uninho com escada absurdo do mascote, a terceira corta em 180.\n        </p>\n        </ion-card-content>\n                \n        <button ion-button clear block color="danger" icon-start>\n        <ion-icon name=\'cash\'></ion-icon>\n        QUERO VER!\n        </button>\n    </ion-card>\n    -->\n    <ion-card *ngFor = "let i of dataArray">  \n        <img src={{i.foto}}/>\n                \n        <ion-card-content>\n        <ion-card-title>\n            {{i.placa}}\n        </ion-card-title>\n        <p>\n            {{i.marca}}\n        </p>\n        </ion-card-content>\n        <form (ngSubmit) = \'sendInfoToFav(i)\'>       \n        <button ion-button clear block color="danger" icon-start>\n        <ion-icon name=\'cash\'></ion-icon>\n        QUERO VER!\n        </button>\n        </form>\n    </ion-card> \n                \n</ion-content>'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\favorites\favorites.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowFavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_charts__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discounts_discounts__ = __webpack_require__(110);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-showFav',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\showFav\showFav.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Informações \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content padding class="content">\n\n\n\n    <ion-grid *ngIf="info">\n\n            <ion-card>\n\n                    <ion-list class="lista">\n\n                        <ion-item class=\'carimage\'>\n\n                             <div class="foto_carro"><img src = "{{info.foto}}" alt=""> </div>\n\n                        </ion-item>\n\n\n\n                        <ion-item class = "item1">\n\n                            <strong class="modelo"> Modelo: </strong> {{info.marca}} \n\n                        </ion-item>\n\n                        <ion-item class = "item2">\n\n                            <strong class="ano"> Ano: </strong> {{info.ano}}\n\n                        </ion-item>\n\n                        <ion-item class = "item3">\n\n                            <strong class="placa"> Placa: </strong> {{info.placa}}\n\n                        </ion-item>\n\n                        <ion-item (click)="changePageToDiscounts()" class = "item4">\n\n                            <strong class="preco"> Preço: </strong> {{info.price}} \n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-card>\n\n\n\n                <div padding>\n\n                    <ion-fab center>\n\n                        <button ion-fab icon-only class = "tabela" (click)="changePageToDiscounts()"> \n\n                            <ion-icon name = "clipboard" color="dark"></ion-icon>\n\n                        </button> \n\n                    </ion-fab>\n\n                    <ion-fab left>\n\n                        <button ion-fab icon-only class = "historico" (click)="changePageToCharts()">\n\n                            <ion-icon name = "stats" color="secondary"></ion-icon>\n\n                        </button>\n\n                    </ion-fab>\n\n                    <ion-fab right> \n\n                        <button ion-fab icon-only class = "favorito" (click)="deleteInfo()">\n\n                            <ion-icon name = "trash" color="vermelhoEscuro"></ion-icon>\n\n                        </button>\n\n                    </ion-fab>\n\n                </div>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\showFav\showFav.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], ShowFavPage);

//# sourceMappingURL=showFav.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showCar_showCar__ = __webpack_require__(108);
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
    function CameraPage(navCtrl, transfer, camera, loadingCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.http = http;
        this.plate = '';
    }
    CameraPage.prototype.getPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            targetHeight: 1000,
            targetWidth: 1000,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = imageData;
            console.log(imageData);
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    CameraPage.prototype.selectImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true,
            targetHeight: 1000,
            targetWidth: 1000,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = imageData;
            console.log(imageData);
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    CameraPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        this.http.post('http://172.21.219.210:5000/image', { img: this.base64Image }, {})
            .then(function (data) {
            _this.presentToast(JSON.parse(data.data).plate); // data received by server
            console.log(data.headers);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__showCar_showCar__["a" /* ShowCarPage */], JSON.parse(data.data).plate);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            _this.presentToast('err');
        });
    };
    CameraPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-camera',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\camera\camera.html"*/'<ion-header height=\'80px\'>\n    <ion-navbar color=\'dark\'>\n        <ion-title>\n            Camera\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n      \n<ion-content padding>\n    <ion-item>\n        <button ion-button full color="secondary" (click)="getPhoto()">Camera</button>\n    </ion-item>\n    <ion-item>\n        <button ion-button full (click)="selectImage()">Galeria</button>\n    </ion-item>\n    <ion-item>\n        <button ion-button full (click)="uploadFile()">Pesquisar</button>\n    </ion-item>\n\n    \n</ion-content>'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\camera\camera.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDiscountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-create-discount',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\create-discount\create-discount.html"*/'<!--\n  Generated template for the CreateDiscountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Criar Desconto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        \n    <ion-item>\n        <ion-label fixed>Desconto</ion-label>\n    	<ion-input type="number" value="-R$"  [(ngModel)]="desconto"></ion-input>\n	</ion-item>\n        \n    <ion-item>\n        <ion-label fixed>Descrição</ion-label>\n        <ion-input type="text" [(ngModel)]="descricao"></ion-input>\n	</ion-item>\n	<button ion-button full color="green" (click)="ready()">Descontar!</button>\n        \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\create-discount\create-discount.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], CreateDiscountPage);

//# sourceMappingURL=create-discount.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_showCar_showCar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_discounts_discounts__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_charts_charts__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_showFav_showFav__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_discount_create_discount__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_carInfo_carInfo__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_printer__ = __webpack_require__(207);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_25_ng2_charts__["ChartsModule"]
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
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_carInfo_carInfo__["a" /* CarInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_printer__["a" /* Printer */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 409:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\contact\contact.html"*/'<ion-header height=\'80px\'>\n  <ion-navbar color=\'dark\'>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ricardo\ionic\Checkar-final\Checkar-master\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 241,
	"./de-at": 242,
	"./de-at.js": 242,
	"./de-ch": 243,
	"./de-ch.js": 243,
	"./de.js": 241,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 252,
	"./es-do": 253,
	"./es-do.js": 253,
	"./es.js": 252,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 443;

/***/ })

},[337]);
//# sourceMappingURL=main.js.map