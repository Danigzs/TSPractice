export class Vinil {
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
      var _vinil= new Vinil();
      _vinil.size = this.size;
      _vinil.position = this.position;
      _vinil.price = this.price;
   
      
      return _vinil
    }
  }