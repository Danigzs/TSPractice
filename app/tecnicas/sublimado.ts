export class Sublimado {
  _id: string; 
  size: string; 
  position: string;
  price: number;
  quantity:number;
  wItem:boolean;
  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.quantity = 0;
    this.wItem = false;
  } 
  setTecnica(size:string,position:string,price:number, quantity:number, wItem:boolean){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.quantity = quantity;
    this.wItem = wItem;

  }
  copyNewTecnica(){
    var _sublimado= new Sublimado();
    _sublimado.size = this.size;
    _sublimado.position = this.position;
    _sublimado.price = this.price;
    _sublimado.quantity = this.quantity;
    _sublimado.wItem = this.wItem;
    
    return _sublimado
  }
}