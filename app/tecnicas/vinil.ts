export class Vinil {
    _id: string; 
    size: string; 
    position: string;
    price: number;
    nombre: string;
    quantity: number;
    wItem: boolean;
   
    constructor() {
      this.size = "";
      this.position = "";
      this.price = 0.0;
      this.quantity = 0;
      this.wItem = false;
      this.nombre = "";
    } 
    setTecnica(nombre:string,size:string,position:string,price:number,quantity:number,wItem:boolean){
      
      this.size  = size;
      this.position = position;
      this.price = price;
      this.quantity = quantity;
      this.wItem = wItem;
      this.nombre = nombre;
  
    }
    copyNewTecnica(){
      var _vinil= new Vinil();
      _vinil.size = this.size;
      _vinil.position = this.position;
      _vinil.price = this.price;
      _vinil.quantity = this.quantity;
      _vinil.wItem = this.wItem;
      _vinil.nombre = this.nombre;
   
      
      return _vinil
    }
  }