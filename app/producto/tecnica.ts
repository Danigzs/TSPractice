export class Tecnica {
  nombre: string;
  precio: number;  
  selected: boolean;
  id:number;
  constructor() {
    this.selected= false;
    this.nombre = "";
    this.precio = 0.0;
   this.id = -1;
  } 
  setTecnica(id:number,nombre:string,precio:number,selected:boolean = false){
    this.selected = selected;
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
  copyNewTecnica(){
    var _tecnica = new Tecnica();
    _tecnica.selected = this.selected;
    _tecnica.id = this.id;
    _tecnica.precio = this.precio;
    _tecnica.nombre = this.nombre;
    return _tecnica
  }
}
