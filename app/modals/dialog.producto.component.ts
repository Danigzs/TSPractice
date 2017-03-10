import { Component, Input, Output, ElementRef } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
  selector: 'modal-producto-selector',
  templateUrl: "./app/modals/dialog_producto.html"
})
export class DialogProductoComponent {
    constructor(public dialogRef: MdDialogRef<DialogProductoComponent>) { }

}