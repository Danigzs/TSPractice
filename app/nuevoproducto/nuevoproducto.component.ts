import {Component,OnInit,ElementRef,ViewChild,ViewContainerRef} from '@angular/core';
import {MdDialog,MdDialogConfig,MdDialogRef} from '@angular/material';
import {Producto} from './../producto/producto';
import {ProductoService} from './../producto/producto.service';

@Component({
  selector: 'nuevoproducto',
    styleUrls: ["app/nuevoproducto/nuevoproducto.css"],
  templateUrl: "app/nuevoproducto/nuevoproducto.html"
       
})
export class NuevoProductoComponent  {
 public clienteSelected = {};
 public producto = {}


Calcular(producto:Producto)
{
 if(producto.cantidad>=1 && producto.cantidad<=12)
 {

 }
 if(producto.cantidad>12 && producto.cantidad<=50)
 {

 }
 if(producto.cantidad>50 && producto.cantidad<=100)
 {

 }
 if(producto.cantidad>100)
 {

 }
}
}