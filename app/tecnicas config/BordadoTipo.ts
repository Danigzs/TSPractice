export class BordadoTipo {

    price: number;   
    tipo:string;
    constructor() {

      this.price = 0.0;
      this.tipo="";
    } 
    setTecnica(tipo:string,price:number){
      
      
      this.tipo = tipo;
      this.price = price;
      
    }
    copyNewTecnica(){
      var _bordadotipo= new BordadoTipo();
      _bordadotipo.tipo = this.tipo;
      _bordadotipo.price = this.price;
    
      
      return _bordadotipo
    }
  }