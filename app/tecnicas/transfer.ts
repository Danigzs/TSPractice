export class Transfer {
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
    setTecnica(size:string,position:string,price:number, quantity: number, wItem:boolean){
      
      this.size  = size;
      this.position = position;
      this.price = price;
      this.quantity = quantity;
      this.wItem = wItem;
  
    }
    copyNewTecnica(){
      var _transfer= new Transfer();
      _transfer.size = this.size;
      _transfer.position = this.position;
      _transfer.price = this.price;
      _transfer.quantity = this.quantity;
      _transfer.wItem = this.wItem;
   
      
      return _transfer
    }
  }