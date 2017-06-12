import {Producto} from './producto'
import {Tecnica} from './tecnica'
export class ProductCotizacion extends Producto {
  quantity:number;
  total:number;
  
  constructor() {
      super()
    this.quantity = 1;
    this.total = 0;
  }

  setProductCotizacion(name:string,price:number,description:string,supplies:string,isProvider:number,isBordesa:number,code:string,quantity:number,total:number){
    this.name = name;
    this.price = price;
    this.description = description;
    this.supplies = supplies;
    this.isProvider = isProvider;
    this.isBordesa = isBordesa;
    this.code = code;
    this.quantity = quantity;
    this.total = total;
    // this.tecnicas = tecnicas;
  }  
  copyNewProductCotizacion(){
    var _producto = new ProductCotizacion();
    _producto.name  = this.name;
    _producto.price = this.price;
    _producto.description = this.description;
    _producto.supplies= this.supplies;  
    _producto.isProvider= this.isProvider;
    _producto.isBordesa = this.isBordesa;
    _producto.code = this.code;
    _producto.quantity = this.quantity;
    _producto.total = this.total;
    // _producto.tecnicas = this.tecnicas;
    return _producto
}
 static copyFromProduct(producto:Producto){
    var _producto = new ProductCotizacion();
    _producto.name  = producto.name;
    _producto.price = producto.price;
    _producto.description = producto.description;
    _producto.supplies= producto.supplies;
    _producto.isProvider= producto.isProvider;
    _producto.isBordesa = producto.isBordesa;
    _producto.code = producto.code;
    _producto.quantity = 1;
    _producto.total = _producto.quantity  * _producto.price;
    // _producto.tecnicas = [];
    return _producto
}
  
}
