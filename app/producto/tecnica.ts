export class Tecnica {
  nombre: string;
  precio: number;

  constructor() {
    this.nombre = "";
    this.precio = 0.0;
   
  } 
  setProducto(nombre:string,precio:number){
    this.nombre = nombre;
    this.precio = precio;

  }
}
