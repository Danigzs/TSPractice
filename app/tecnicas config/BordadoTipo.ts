export class BordadoTipo {

    costo: number;   
    nombre:string;
    constructor() {

      this.costo = 0.0;
      this.nombre="";
    } 
    setTecnica(nombre:string,costo:number){
      
      
      this.nombre = nombre;
      this.costo = costo;
      
    }
    copyNewTecnica(){
      var _bordadotipo= new BordadoTipo();
      _bordadotipo.nombre = this.nombre;
      _bordadotipo.costo = this.costo;
    
      
      return _bordadotipo
    }
  }