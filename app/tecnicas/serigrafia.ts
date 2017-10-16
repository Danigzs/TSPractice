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
  tintas:number

bInk:SerigrafiaTipoTinta;


  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.tintas = 0.0;
  } 
  setTecnica(size:string,position:string,price:number,tintas:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.tintas=tintas;
  }
  copyNewTecnica(){
    var _serigrafia= new Serigrafia();
    _serigrafia.size = this.size;
    _serigrafia.position = this.position;
    _serigrafia.price = this.price;
    _serigrafia.tintas=this.tintas
    
    return _serigrafia
  }
}