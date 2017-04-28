import {Tecnica} from './tecnica'
export class Producto {
  nombre: string;
  precio: number;
  descripcion: string;
  cantidad:number; 
  total:number;
  tecnicas:Array<Tecnica>
  constructor() {
    this.nombre = "";
    this.precio = 0.0;
    this.descripcion  = "";
    this.cantidad = 0;
    this.total = 0;
    this.tecnicas = [];
   
  }
  setProducto(nombre:string,precio:number,descripcion:string,cantidad:number,tecnicas:Array<Tecnica>){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.total = cantidad*precio;
    this.tecnicas = [];
  }
  
}
