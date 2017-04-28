export class Tecnica {
  nombre: string;
  precio: number;
  id:number;
  constructor() {
    this.nombre = "";
    this.precio = 0.0;
   this.id = -1;
  } 
  setTecnica(id:number,nombre:string,precio:number){
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
  copyNewTecnica(){
    var _tecnica = new Tecnica();
    _tecnica.id = this.id;
    _tecnica.precio = this.precio;
    _tecnica.nombre = this.nombre;
    _tecnica["selected"] = this["selected"];
    return _tecnica
  }
}
