import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
@Injectable()
export class CategoriaService {
    categorias:Array<Categoria>;
    
    constructor(){
        var categoria1= new Categoria();
        var categoria2= new Categoria();
        var categoria3= new Categoria();
        var categoria4= new Categoria();
        var categoria5= new Categoria();
        var categoria6= new Categoria();
        var categoria7= new Categoria();

        categoria1.setCategoria(1,"Chalecos");
        categoria2.setCategoria(2,"Pantalones");
        categoria3.setCategoria(3,"Telas");
        categoria4.setCategoria(4,"Bordados");
        categoria5.setCategoria(5,"Kits")
        categoria6.setCategoria(6,"Laptops")

        this.categorias = [categoria1,categoria2,categoria3,categoria4,categoria5,categoria6,categoria7];
    }
    getCategorias() {
    return this.categorias;
  }

  addCategoria(categoria:Categoria){
      this.categorias.push(categoria);
  }

}