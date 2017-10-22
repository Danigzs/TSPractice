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
  quantity:number;
  wItem:boolean
  cantidad:number;

bInk:SerigrafiaTipoTinta;
bInkType: SerigrafiaTipoTinta;
bUbications:Ubicaciones;
bSize:SerigrafiaSize;
bBordesaPrice:SerigrafiaPrecioBordesa;
bClientePrice:SerigrafiaPrecioCliente;


  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.tintas = 0.0;
    this.quantity = 0;
    this.wItem = false;
    this.cantidad = 0;
    this.bInk  = new SerigrafiaTipoTinta();
    this.bInkType  = new SerigrafiaTipoTinta();
    this.bUbications  = new Ubicaciones();
    this.bSize  = new SerigrafiaSize();
    this.bBordesaPrice   = new SerigrafiaPrecioBordesa();
    this.bClientePrice   = new SerigrafiaPrecioCliente();
  } 
  setTecnica(size:string,position:string,price:number,tintas:number, quantity:number, wItem:boolean,cantidad:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.cantidad = cantidad;
    this.tintas=tintas;
    this.quantity = quantity;
    this.wItem = wItem;
  }
  copyNewTecnica(){
    var _serigrafia= new Serigrafia();
    _serigrafia.size = this.size;
    _serigrafia.position = this.position;
    _serigrafia.price = this.price;
    _serigrafia.tintas=this.tintas;
    _serigrafia.cantidad=this.cantidad;    
    _serigrafia.bInk=this.bInk;
    _serigrafia.bInkType=this.bInkType;
    _serigrafia.bUbications=this.bUbications;
    _serigrafia.bSize=this.bSize;
    _serigrafia.bBordesaPrice=this.bBordesaPrice;
    _serigrafia.bClientePrice=this.bClientePrice;
    _serigrafia.quantity = this.quantity;   
    _serigrafia.wItem = this.wItem;   
    
    return _serigrafia
  }
}