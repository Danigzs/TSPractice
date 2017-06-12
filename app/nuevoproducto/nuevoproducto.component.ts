import {Component,OnInit,ElementRef,ViewChild,ViewContainerRef} from '@angular/core';
import {MdDialog,MdDialogConfig,MdDialogRef} from '@angular/material';
import {Producto} from './../producto/producto';
import {ProductoService} from './../producto/producto.service';

@Component({
  selector: 'nuevoproducto',
    styleUrls: ["app/nuevoproducto/nuevoproducto.css"],
  templateUrl: "app/nuevoproducto/nuevoproducto.html"
       
})
export class NuevoProductoComponent  implements OnInit{
  
 public clienteSelected = {};
 public producto:Producto;

constructor (private _productService:ProductoService){}
updatePrice(){
      // this.producto.pCantidadDD = this.producto.price - this.producto.price * .13 
      // this.producto.pCantidadTC= this.producto.price - this.producto.price * .17
      // this.producto.pCantidadCC= this.producto.price - this.producto.price * .21
      // this.producto.pCantidadMC= this.producto.price - this.producto.price * .25
}
Calcular(producto:Producto)
{
}
agregarProducto(){
  this._productService.addProduct(this.producto).subscribe(
    data => {

    }
  )
}

ngOnInit() {
  this.producto = new Producto();  
}
}