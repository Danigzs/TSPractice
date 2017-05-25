import { Component, Input, Output, ElementRef } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
  selector: 'modal-inventario-selector',
  templateUrl: "./app/inventarios/dialog_inventario.html"
})
export class DialogInventarioComponent {
  
    constructor(public dialogRef: MdDialogRef<DialogInventarioComponent>) { }

}