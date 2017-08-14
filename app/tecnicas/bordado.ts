export class Bordado {
  size: string; 
  position: string;
  price: number;
  puntadas:number;
  bordado:string;
  colores:string;
  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.puntadas =0;
    this.bordado ="";
    this.colores="";
  } 
  setTecnica(colores:string,bordado:string,puntadas:number,size:string,position:string,price:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.puntadas = puntadas;
    this.bordado= bordado;
    this.colores=colores;
  }
  copyNewTecnica(){
    var _bordado= new Bordado();
    _bordado.size = this.size;
    _bordado.position = this.position;
    _bordado.price = this.price;
    _bordado.puntadas=this.puntadas
    _bordado.bordado=this.bordado;
    _bordado.colores=this.colores;
    
    return _bordado
  }
}