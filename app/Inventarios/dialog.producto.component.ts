import { Component, Input, Output, ElementRef } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {CotizadorComponent} from './../cotizador.component';
@Component({
  selector: 'modal-producto-selector',
  templateUrl: "./app/inventarios/dialog_producto.html",
  styleUrls: ["./app/inventarios/dialog_producto.css"],
})
export class DialogProductoComponent {

  public hideModal = true;
  public hideModal2= false;
  
    Details(){
    this.hideModal = false;
    
    
  }
  
    closeModal(){
    this.hideModal = true;
    
  }
    constructor(public dialogRef: MdDialogRef<DialogProductoComponent>) { }
    
  } 
  