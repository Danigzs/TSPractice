import {Tecnica} from './tecnica'
export class Producto {
  _id: number;
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
 stock:number;
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
    this.stock = 0;
    // this.cantidad = 0;
    // this.total = 0;
    // this.tecnicas = [];
   
  }
  setProducto(CantidadDDiva:number,CantidadTCiva:number,CantidadCCiva:number,CantidadMCiva:number,_id:number, name:string,price:number,description:string,supplies:string,isProvider:number,isBordesa:number,code:string){
    this.CantidadDDiva=CantidadDDiva;
    this.CantidadTCiva=CantidadTCiva;
    this.CantidadCCiva= CantidadCCiva
    this.CantidadMCiva = CantidadMCiva;
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
    _producto.CantidadDDiva = this.CantidadDDiva;
    _producto.CantidadTCiva = this.CantidadTCiva;
    _producto.CantidadCCiva = this.CantidadCCiva;
    _producto.CantidadMCiva = this.CantidadMCiva;
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
