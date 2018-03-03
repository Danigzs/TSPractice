import {SerigrafiaTipoTinta} from './../tecnicas_config/SerigrafiaTipoTinta';
import {Ubicaciones} from './../tecnicas_config/ubicaciones';
import {SerigrafiaPrecioBordesa} from './../tecnicas_config/serigrafiaPrecioBordesa';
import {SerigrafiaSize} from './../tecnicas_config/serigrafiaSize';
import {SerigrafiaPrecioCliente} from './../tecnicas_config/serigrafiaPrecioCliente';

 

export class Serigrafia {
  _id: string; 
  size: string; 
  position: string;
  price: number;
  tintas:number
  quantity:number;
  wItem:boolean
  wPresecado:boolean
  cantidad:number;
  percentageSize:number;
  percentageType:number;
  costoTotal:number;
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
    this.quantity = 1;
    this.wItem = false;
    this.cantidad = 1;
    this.bInk  = new SerigrafiaTipoTinta();
    this.wPresecado = false;
    this.bInkType  = new SerigrafiaTipoTinta();
    this.bUbications  = new Ubicaciones();
    this.bSize  = new SerigrafiaSize();
    this.bBordesaPrice   = new SerigrafiaPrecioBordesa();
    this.bClientePrice   = new SerigrafiaPrecioCliente();
    this.percentageSize = 0;
    this.percentageType = 0;
    this.costoTotal = 0;
  } 
  setTecnica(size:string,position:string,price:number,tintas:number, quantity:number, wItem:boolean,cantidad:number, percentageSize:number, percentageType:number, costoTotal:number, wPresecado:boolean){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.cantidad = cantidad;
    this.tintas=tintas;
    this.quantity = quantity;
    this.wItem = wItem;
    this.wPresecado = wPresecado;
    this.percentageType = percentageType;
    this.percentageSize = percentageSize;
    this.costoTotal = costoTotal;
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
    _serigrafia.wPresecado = this.wPresecado;
    _serigrafia.bSize=this.bSize;
    _serigrafia.bBordesaPrice=this.bBordesaPrice;
    _serigrafia.bClientePrice=this.bClientePrice;
    _serigrafia.quantity = this.quantity;   
    _serigrafia.wItem = this.wItem;   
    _serigrafia.percentageSize = this.percentageSize;
    _serigrafia.percentageType = this.percentageType;
    _serigrafia.costoTotal = this.costoTotal;
    return _serigrafia
  }
}