export class Vinil {
    _id: string; 
    size: string; 
    position: string;
    price: number;
    nombre: string;
    quantity: number;
    wItem: boolean;
<<<<<<< HEAD
   
=======
    percentageSize: number;
    percentageType: number;

>>>>>>> a9e2e77adf93d1daa1c369097dae1848c4df4f69
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
<<<<<<< HEAD
    setTecnica(nombre:string,size:string,position:string,price:number,quantity:number,wItem:boolean){
      
      this.size  = size;
      this.position = position;
      this.price = price;
      this.quantity = quantity;
      this.wItem = wItem;
      this.nombre = nombre;
  
=======
     
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
>>>>>>> a9e2e77adf93d1daa1c369097dae1848c4df4f69
    }
    copyNewTecnica(){
      var _vinil= new Vinil();
      _vinil.size = this.size;
      _vinil.position = this.position;
      _vinil.price = this.price;
<<<<<<< HEAD
=======
      _vinil.wItem = this.wItem;
>>>>>>> a9e2e77adf93d1daa1c369097dae1848c4df4f69
      _vinil.quantity = this.quantity;
      _vinil.nombre = this.nombre;
<<<<<<< HEAD
   
      
=======
      _vinil.percentageSize = this.percentageSize;
      _vinil.percentageType = this.percentageType;
>>>>>>> a9e2e77adf93d1daa1c369097dae1848c4df4f69
      return _vinil
    }
  }