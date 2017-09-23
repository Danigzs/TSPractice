import {BordadoTipo} from './../tecnicas config/BordadoTipo';
 import {BordadoPuntadas} from './../tecnicas config/BordadoPuntadas';
 import {BordadoSize} from './../tecnicas config/BordadoSize';
 import {Posiciones} from './../tecnicas config/posiciones';

export class Bordado {
  size: string; 
  position: string;
  price: number;
  puntadas:number;
  bordado:string;
  colores:string;
  cantidad:number;

  bType:BordadoTipo;
  bStitches:BordadoPuntadas;
  bSize:BordadoSize
  bPosition:Posiciones
  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.puntadas =0;
    this.bordado ="";
    this.colores="";
    this.cantidad=0;
    this.bType = new BordadoTipo()
    this.bStitches = new BordadoPuntadas()
    this.bSize = new BordadoSize()
    this.bPosition = new Posiciones()
  } 
  calculateBordadoPrice(){
    this.price = this.cantidad * ( this.bType.costo + this.bSize.costo + this.bPosition.costo + this.bStitches.costo)
  }
  setTecnica(cantidad:number,colores:string,bordado:string,puntadas:number,size:string,position:string,price:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.puntadas = puntadas;
    this.bordado= bordado;
    this.colores=colores;
    this.cantidad=cantidad;
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
    return _bordado
  }
}