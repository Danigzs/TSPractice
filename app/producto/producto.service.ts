import { Injectable } from '@angular/core';
import { Producto } from './producto';
@Injectable()
export class ProductoService {
  productos:Array<Producto>;

  constructor() {
    var producto1 = new Producto();
    var producto2 = new Producto();
    var producto3 = new Producto();

    producto1.setProducto("celular",2000,"Telefono celular",1);
    producto2.setProducto("Television",9000,"Television Full HD",1);
    producto3.setProducto("Laptop",13000,"Computadora portatil",1);
    
    this.productos = [producto1,producto2,producto3];
  }

  getProductos() {
    return this.productos;
  }
}