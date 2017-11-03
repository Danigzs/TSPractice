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
import {BordadoTipo} from './../tecnicas config/BordadoTipo';
 import {BordadoPuntadas} from './../tecnicas config/BordadoPuntadas';
 import {BordadoSize} from './../tecnicas config/BordadoSize';
 import {Posiciones} from './../tecnicas config/posiciones';
 import {Colores} from './../tecnicas config/colores';
 import {AppConfig} from './../appConfig/appConfig';
 import {AppConfigService} from './../appConfig/appConfig.service';

 @Component({
  
  providers: [AppConfigService],
 

})
 
export class Bordado {
  size: string; 
  position: string;
  price: number;
  puntadas:number;
  bordado:string;
  colores:number;
  cantidad:number;
  appConfig = new AppConfig;
  _appConfigService:AppConfigService;

  costoTotal:number;
  bType:BordadoTipo;
  bStitches:BordadoPuntadas;
  bSize:BordadoSize;
  bPosition:Posiciones;
  bColores:Array<Colores>;

  percentageSize:number;
  percentageType:number;
  percentagePosition:number;

  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.puntadas =0;
    this.bordado ="";
    this.colores=0;
    this.cantidad=0;
    this.bType = new BordadoTipo()
    this.bStitches = new BordadoPuntadas()
    this.bSize = new BordadoSize()
    this.bPosition = new Posiciones()
    this.bColores = new Array<Colores>()
    this.percentageSize = 0;
    this.percentageType = 0;
    this.percentagePosition = 0;
    this.costoTotal = 0;
  } 
  calculateBordadoPrice(){
    this.appConfig = new AppConfig();
    this.price = this.cantidad * ( (this.bType.costo) + (this.bSize.costo) + (this.bPosition.costo*.01))
  }
  setTecnica(cantidad:number,colores:number,bordado:string,puntadas:number,size:string,position:string,price:number, percentageSize:number, percentageType:number, percentagePosition:number, costoTotal:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.puntadas = puntadas;
    this.bordado= bordado;
    this.colores=colores;
    this.cantidad=cantidad;
    this.percentageSize = percentageSize;
    this.percentagePosition = percentagePosition;
    this.percentageType = percentageType;
    this.costoTotal = costoTotal;
  }
  copyNewTecnica(){
    var _bordado= new Bordado();
    _bordado.size = this.size;
    _bordado.position = this.position;
    _bordado.price = this.price;
    _bordado.puntadas=this.puntadas
    _bordado.bordado=this.bordado;
    _bordado.colores=this.colores;
    _bordado.cantidad=this.cantidad;
    
    _bordado.bType=this.bType;
    _bordado.bStitches=this.bStitches;
    _bordado.bPosition=this.bPosition;
    _bordado.bSize=this.bSize;
    _bordado.bColores=this.bColores;

    _bordado.percentageSize=this.percentageSize;
    _bordado.percentageType=this.percentageType;
    _bordado.percentagePosition=this.percentagePosition;
    _bordado.costoTotal = this.costoTotal;
    return _bordado
  }

  getBordadosData(): Promise < boolean > {
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

  getColores() {
    return this.bColores.join(',');
  }

}