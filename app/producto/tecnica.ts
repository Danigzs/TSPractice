export class Tecnica {
  _id: string;
  name: string;
  subType: string;
  size: string; 
  position: string;
  price: number;
  puntadas:number;
  bordado:string;
  colores:string;
  constructor() {
    this.name = "";
    this.subType = "";
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.puntadas =0;
    this.bordado ="";
    this.colores="";
  } 
  setTecnica(colores:string,bordado:number,puntadas:number,name:string,subType:string,size:string,position:string,price:number){
    this.name = name;
    this.subType = subType;
    this.size  = size;
    this.position = position;
    this.price = price;
    this.puntadas = puntadas;
    this.bordado="";
    this.colores="";
  }
  copyNewTecnica(){
    var _tecnica = new Tecnica();
    _tecnica.name = this.name;
    _tecnica.subType = this.subType;
    _tecnica.size = this.size;
    _tecnica.position = this.position;
    _tecnica.price = this.price;
    _tecnica.puntadas=this.puntadas
    _tecnica.bordado="";
    _tecnica.colores="";
    
    return _tecnica
  }
}
