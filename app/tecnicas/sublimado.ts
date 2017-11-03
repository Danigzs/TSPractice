export class Sublimado {
  _id: string; 
  size: string; 
  position: string;
  price: number;
  quantity:number;
  wItem:boolean;
  percentageSize:number;
  costoTotal:number;
  constructor() {
    this.size = "";
    this.position = "";
    this.price = 0.0;
    this.quantity = 0;
    this.wItem = false;
    this.percentageSize = 0;
    this.costoTotal = 0;
  } 
  setTecnica(size:string,position:string,price:number, quantity:number, wItem:boolean, percentageSize:number, costoTotal:number){
    
    this.size  = size;
    this.position = position;
    this.price = price;
    this.quantity = quantity;
    this.wItem = wItem;
    this.percentageSize = percentageSize;
    this.costoTotal = costoTotal;
  }
  copyNewTecnica(){
    var _sublimado= new Sublimado();
    _sublimado.size = this.size;
    _sublimado.position = this.position;
    _sublimado.price = this.price;
    _sublimado.quantity = this.quantity;
    _sublimado.wItem = this.wItem;
    _sublimado.percentageSize = this.percentageSize;
    _sublimado.costoTotal = this.costoTotal;
    return _sublimado
  }
}