
import {Observable} from 'rxjs/Observable';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ViewContainerRef
} from '@angular/core';
import {SerigrafiaTipoTinta} from './../tecnicas config/SerigrafiaTipoTinta';
import {Ubicaciones} from './../tecnicas config/ubicaciones';
import {SerigrafiaPrecioBordesa} from './../tecnicas config/serigrafiaPrecioBordesa';
import {SerigrafiaPrecioCliente} from './../tecnicas config/serigrafiaPrecioCliente';
import {AppConfig} from './../appConfig/appConfig';
import {SerigrafiaSize} from './../tecnicas config/serigrafiaSize';
import {AppConfigService} from './../appConfig/appConfig.service';


@Component({
  
  providers: [AppConfigService],
 

})

export class Serigrafia {
  _id: string; 
  size: string; 
  position: string;
  price: number;
  tintas:number;
  cantidad:number;

  appConfig = new AppConfig;
  _appConfigService:AppConfigService;

bInk:SerigrafiaTipoTinta;
bUbication: Ubicaciones;
bBordesaPrice: SerigrafiaPrecioBordesa;
bClientePrice: SerigrafiaPrecioCliente;
bSize: SerigrafiaSize;


  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.tintas = 0.0;
    this.cantidad = 0;
    this.bInk = new SerigrafiaTipoTinta();
    this.bUbication = new Ubicaciones();
    this.bBordesaPrice = new SerigrafiaPrecioBordesa();
    this.bClientePrice = new SerigrafiaPrecioCliente();
    this.bSize = new SerigrafiaSize();

    
  } 

  calculateSerigrafiaPrice()
  {
    this.appConfig = new AppConfig();
    this.price = this.cantidad * ((this.bInk.price)*(this.bBordesaPrice.costo)*(this.bClientePrice.costo))

  }
  setTecnica(cantidad:number,size:string,position:string,price:number,tintas:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.tintas=tintas;
    this.cantidad = cantidad;
  }
  copyNewTecnica(){
    var _serigrafia= new Serigrafia();
    _serigrafia.size = this.size;
    _serigrafia.position = this.position;
    _serigrafia.price = this.price;
    _serigrafia.tintas=this.tintas;
    _serigrafia.cantidad = this.cantidad;
    
    return _serigrafia
  }

  getSerigrafiaData(): Promise < boolean>{
    return new Promise < boolean > ((resolve, reject) => {
      Observable.forkJoin(
        
         this._appConfigService.getAppConfig(),
       
 
         ).subscribe(
          results => {         
            this.appConfig = results[0];  
            resolve(true)
          }
          );
    });
  }
  
  ngOnInit() {
    this.appConfig

  }
}