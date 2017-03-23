export class Producto {
  nombre: string;
  precio: number;
  descripcion: string;
  cantidad:number;
  constructor() {
    this.nombre = "";
    this.precio = 0.0;
    this.descripcion  = "";
    this.cantidad = 0;
  }
  setProducto(nombre:string,precio:number,descripcion:string,cantidad:number){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
  }
}
