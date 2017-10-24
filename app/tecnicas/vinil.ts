export class Vinil {
    _id: string; 
    size: string; 
    position: string;
    price: number;
<<<<<<< HEAD
    quantity:number;
    wItem:boolean;
=======
    nombre: string;
    quantity: number;
    wItem: boolean;
>>>>>>> d286a5988d95e519398fc1ad5cb6b4393787fad8
   
    constructor() {
      this.size = "";
      this.position = "";
      this.price = 0.0;
      this.quantity = 0;
      this.wItem = false;
<<<<<<< HEAD
    } 
    setTecnica(quantity:number,wItem:boolean,size:string,position:string,price:number){
=======
      this.nombre = "";
    } 
    setTecnica(nombre:string,size:string,position:string,price:number,quantity:number,wItem:boolean){
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
      this.nombre = nombre;
>>>>>>> d286a5988d95e519398fc1ad5cb6b4393787fad8
  
    }
    copyNewTecnica(){
      var _vinil= new Vinil();
      _vinil.size = this.size;
      _vinil.position = this.position;
      _vinil.price = this.price;
<<<<<<< HEAD
      _vinil.price = this.price;
      _vinil.wItem = this.wItem;
=======
      _vinil.quantity = this.quantity;
      _vinil.wItem = this.wItem;
      _vinil.nombre = this.nombre;
>>>>>>> d286a5988d95e519398fc1ad5cb6b4393787fad8
   
      
      return _vinil
    }
  }