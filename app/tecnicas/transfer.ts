export class Transfer {
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
      var _transfer= new Transfer();
      _transfer.size = this.size;
      _transfer.position = this.position;
      _transfer.price = this.price;
   
      
      return _transfer
    }
  }