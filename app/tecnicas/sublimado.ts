export class Sublimado {
  _id: string; 
  size: string; 
  position: string;
  price: number;
 
  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
  } 
  setTecnica(size:string,position:string,price:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;

  }
  copyNewTecnica(){
    var _sublimado= new Sublimado();
    _sublimado.size = this.size;
    _sublimado.position = this.position;
    _sublimado.price = this.price;
 
    
    return _sublimado
  }
}