import {Tecnica} from './tecnica'
export class Producto {
  name: string;
  price: number;
  description: string;
  supplies: string;
  isProvider: number;
  isBordesa: number;
  code:string;

  // tecnicas:Array<Tecnica>;
  
  constructor() {
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
  setProducto(name:string,price:number,description:string,supplies:string,isProvider:number,isBordesa:number,code:string){
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
