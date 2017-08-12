export class Serigrafia {
  _id: string; 
  size: string; 
  position: string;
  price: number;
  colores:string;
  tintas:number
  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.tintas = 0.0;
  } 
  setTecnica(size:string,position:string,price:number,tintas:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.tintas=tintas;
  }
  copyNewTecnica(){
    var _serigrafia= new Serigrafia();
    _serigrafia.size = this.size;
    _serigrafia.position = this.position;
    _serigrafia.price = this.price;
    _serigrafia.tintas=this.tintas
    
    return _serigrafia
  }
}