export class BordadoTipo {

    _id:number;
    costo: number;   
    nombre:string;
    constructor() {
      this._id = 0;
      this.costo = 0.0;
      this.nombre="";
    } 
    setTecnica(_id:number,nombre:string,costo:number){
      
      this._id = _id;
      this.nombre = nombre;
      this.costo = costo;
      
    }
    copyNewTecnica(){
      var _bordadotipo= new BordadoTipo();
      _bordadotipo._id = this._id;
      _bordadotipo.nombre = this.nombre;
      _bordadotipo.costo = this.costo;
    
      
      return _bordadotipo
    }
  }