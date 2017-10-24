export class Vinil {
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
    setTecnica(quantity:number,wItem:boolean,size:string,position:string,price:number){
      
      this.size  = size;
      this.position = position;
      this.price = price;
      this.quantity = quantity
      this.wItem = wItem;
      
  
    }
    copyNewTecnica(){
      var _vinil= new Vinil();
      _vinil.size = this.size;
      _vinil.position = this.position;
      _vinil.price = this.price;
      _vinil.price = this.price;
      _vinil.wItem = this.wItem;
   
      
      return _vinil
    }
  }