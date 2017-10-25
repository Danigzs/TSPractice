export class Transfer {

    _id: string; 
    size: string; 
    position: string;
    price: number;
    quantity:number;
    wItem:boolean;
    percentageSize:number;

    constructor() {
      this.size = "";
      this.position = "";
      this.price = 0.0;
      this.quantity = 0;
      this.wItem = false;
      this.perceentageSize = 0;
    } 
    setTecnica(wItem:boolean,quantity:number,size:string,position:string,price:number, percentageSize:number){
      
      this.size  = size;
      this.position = position;
      this.price = price;
      this.quantity = quantity
      this.wItem = wItem;
      this.percentageSize = percentageSize;
      
    }
    copyNewTecnica(){
      var _transfer= new Transfer();
      _transfer.size = this.size;
      _transfer.position = this.position;
      _transfer.price = this.price;
      _transfer.quantity = this.quantity;
      _transfer.wItem = this.wItem;
      _transfer.percentageSize = this.percentageSize
      
   
      
      return _transfer
    }
  }  