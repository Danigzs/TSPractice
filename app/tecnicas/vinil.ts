export class Vinil {
    _id: string; 
    size: string; 
    position: string;
    price: number;
    nombre: string;
    quantity: number;
    wItem: boolean;
    percentageSize: number;
    percentageType: number;

    constructor() {
      this.size = "";
      this.position = "";
      this.price = 0.0;
      this.quantity = 0;
      this.wItem = false;
      this.nombre = "";
      this.percentageSize = 0.0;
      this.percentageType = 0.0;
    } 
     
    setTecnica(nombre:string,size:string,position:string,price:number,quantity:number,wItem:boolean, percentageSize:number, percentageType:number){
 
      this.nombre = "";
      this.size  = size;
      this.position = position;
      this.price = price;
      this.quantity = quantity
      this.wItem = wItem;
      this.nombre = nombre;
      this.percentageSize = percentageSize;
      this.percentageType = percentageType;
    }
    copyNewTecnica(){
      var _vinil= new Vinil();
      _vinil.size = this.size;
      _vinil.position = this.position;
      _vinil.price = this.price;
      _vinil.wItem = this.wItem;
      _vinil.quantity = this.quantity;
      _vinil.nombre = this.nombre;
      _vinil.percentageSize = this.percentageSize;
      _vinil.percentageType = this.percentageType;
      return _vinil
    }
  }