export class Producto {
  nombre: string;
  precio: number;
  descripcion: string;

  constructor() {
    this.nombre = "";
    this.precio = 0.0;
    this.descripcion  = "";
  } 
  setProducto(nombre:string,precio:number,descripcion:string){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}
