export class Categoria {
  nombre: string;
  selected: boolean;
  id:number;
  constructor() {
    this.selected= false;
    this.nombre = "";
   this.id = -1;
  } 
  setCategoria(id:number,nombre:string,selected:boolean = false){
    this.selected = selected;
    this.nombre = nombre;
    this.id = id;
  }
  copyNewCategoria(){
    var _categoria = new Categoria();
    _categoria.selected = this.selected;
    _categoria.id = this.id;
    _categoria.nombre = this.nombre;
    return _categoria
  }
}
