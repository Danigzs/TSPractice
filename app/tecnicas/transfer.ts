export class Transfer {
    _id: string; 
    size: string; 
    position: string;
    price: number;
    quantity:number;
    wItem:boolean;
<<<<<<< HEAD
    
=======
   
>>>>>>> d286a5988d95e519398fc1ad5cb6b4393787fad8
    constructor() {
      this.size = "";
      this.position = "";
      this.price = 0.0;
      this.quantity = 0;
      this.wItem = false;
<<<<<<< HEAD
      
    } 
    setTecnica(wItem:boolean,quantity:number,size:string,position:string,price:number){
=======
    } 
    setTecnica(size:string,position:string,price:number, quantity: number, wItem:boolean){
>>>>>>> d286a5988d95e519398fc1ad5cb6b4393787fad8
      
      this.size  = size;
      this.position = position;
      this.price = price;
<<<<<<< HEAD
      this.quantity = quantity
      this.wItem = wItem;
      
=======
      this.quantity = quantity;
      this.wItem = wItem;
  
>>>>>>> d286a5988d95e519398fc1ad5cb6b4393787fad8
    }
    copyNewTecnica(){
      var _transfer= new Transfer();
      _transfer.size = this.size;
      _transfer.position = this.position;
      _transfer.price = this.price;
<<<<<<< HEAD
      _transfer.wItem = this.wItem;
      
=======
      _transfer.quantity = this.quantity;
      _transfer.wItem = this.wItem;
>>>>>>> d286a5988d95e519398fc1ad5cb6b4393787fad8
   
      
      return _transfer
    }
  }