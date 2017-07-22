import {Tecnica} from "./../producto/tecnica"
export class TecnicaCotizacion extends Tecnica {
_id:string;
quantity:number;
total:number;
colores:string;

  constructor() {
      super()
    this.quantity = 1;
    this.total = 0.0;
    this.colores=""
  } 
  setTecnicaCotizacion(colores:string,bordado:string,puntadas:number,_id:string,name:string,subType:string,size:string,position:string,price:number,quantity:number,total:number){
    this._id = _id;
    this.name = name;
    this.subType = subType;
    this.size  = size;
    this.position = position;
    this.price = price;
    this.quantity = quantity;
    this.total = total;
    this.puntadas = puntadas;
    this.bordado = bordado;
    this.colores=colores;
  }
  copyNewTecnica(){
    var _tecnica = new TecnicaCotizacion();
    _tecnica._id = this._id;
    _tecnica.name = this.name;
    _tecnica.subType = this.subType;
    _tecnica.size = this.size;
    _tecnica.position = this.position;
    _tecnica.price = this.price;
    _tecnica.quantity = this.quantity;
    _tecnica.total = this.total;
    _tecnica.puntadas = this.puntadas;
    _tecnica.bordado = this.bordado;
    _tecnica.colores = this.colores;
    
    return _tecnica
  }
  static copyFromTecnica(tecnica:Tecnica){
     var _tecnica = new TecnicaCotizacion();
     _tecnica._id = tecnica._id;
    _tecnica.name = tecnica.name;
    _tecnica.subType = tecnica.subType
    _tecnica.size = tecnica.size;
    _tecnica.position = tecnica.position;
    _tecnica.price = tecnica.price;
    _tecnica.quantity = 1;
    _tecnica.total = _tecnica.quantity * _tecnica.price;
     _tecnica.puntadas = _tecnica.puntadas;
    _tecnica.bordado = _tecnica.bordado;
    _tecnica.colores = _tecnica.colores;
    return _tecnica;
  }
}
