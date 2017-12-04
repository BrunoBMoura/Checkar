import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html'
})

export class ChartsPage {
  info: {
    marca: string,
    ano   : string,
    placa : string,
    price : string,
    foto  : string,
    descontos: string,
    anos: any[],
    precos: Array<string>
  }

  constructor(public navCtrl: NavController, private navParams: NavParams ) {
    this.info=this.navParams.data;
  }

  labelanos: string[];
  precos: any = [];

  ionViewWillLoad() {

    this.labelanos = [];
    this.precos = [];

    var i = 0;

    for (i = 0; i < this.info.anos.length; i++) {
      if(i != this.info.anos.length - 1) {
        if(this.info.anos[i] < this.info.anos[i+1]) {
          this.labelanos.push(this.info.anos[i].toString());
          this.precos.push(this.info.precos[i]);
        }
      }
      else {
        if(this.info.anos[i] == this.info.anos[i-1]+1) {
          this.labelanos.push(this.info.anos[i].toString());
          this.precos.push(this.info.precos[i]);
        }
      }
    }

    console.log(this.labelanos);
    console.log(this.precos);

    this.lineChartLabels = this.labelanos;
    this.lineChartData = [
      {data: this.precos, label: ''}
    ];

  }

  public lineChartData:Array<any> = [
    {data: this.precos, label: ''}
  ];

  public lineChartLabels: string[] = this.labelanos;

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  

  /*IonViewDidLoad() {

  }*/

}
