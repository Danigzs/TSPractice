import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';


import {
  MdDialog,
  MdDialogConfig,
  MdDialogRef
} from '@angular/material';


@Component({
  selector: 'nuevoproducto',
    styleUrls: ["app/nuevoproducto/nuevoproducto.css"],
  templateUrl: "app/nuevoproducto/nuevoproducto.html"
       
})
export class NuevoProductoComponent  {
 public clienteSelected = {};
 public producto = {};

agregarProducto(){
  
}
}