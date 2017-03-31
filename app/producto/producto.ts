export class Producto {
  nombre: string;
  precio: number;
  descripcion: string;
  cantidad:number; 
  total:number;
  constructor() {
    this.nombre = "";
    this.precio = 0.0;
    this.descripcion  = "";
    this.cantidad = 0;
    this.total = 0;
   
  }
  setProducto(nombre:string,precio:number,descripcion:string,cantidad:number,total:number){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.total = cantidad*precio;  
  }
  
}
