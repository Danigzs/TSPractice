import {Tecnica} from './tecnica'
export class Producto {
  _id: String;
  name: string;
  price: number;
  description: string;
  supplies: string;
  isProvider: number;
  isBordesa: number;
  code:string;
 pCantidadDD:number;
 pCantidadTC:number;
 pCantidadCC:number;
 pCantidadMC:number;
 CantidadDDiva:number;
 CantidadTCiva:number;
 CantidadCCiva:number;
 CantidadMCiva:number;
  // tecnicas:Array<Tecnica>;
  
  constructor() {
    this.CantidadDDiva=0.0;
    this.CantidadTCiva=0.0;
    this.CantidadCCiva=0.0;
    this.CantidadMCiva=0.0;
    this.name = "";
    this.price = 0.0;
    this.description  = "";
    this.supplies = "";
    this.isProvider = 0;
    this.isBordesa = 0;
    this.code = "";
    // this.cantidad = 0;
    // this.total = 0;
    // this.tecnicas = [];
   
  }
  setProducto(_id:string, name:string,price:number,description:string,supplies:string,isProvider:number,isBordesa:number,code:string){
    this._id = _id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.supplies = supplies;
    this.isProvider = isProvider;
    this.isBordesa = isBordesa;
    this.code = code;
  }  
  copyNewProducto(){
    var _producto = new Producto();
    _producto._id = this._id;
    _producto.name  = this.name;
    _producto.price = this.price;
    _producto.description = this.description;
    _producto.supplies= this.supplies;
    _producto.isProvider= this.isProvider;
    _producto.isBordesa = this.isBordesa;
    _producto.code = this.code;
    return _producto
}
  
}
