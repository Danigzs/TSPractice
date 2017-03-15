import { Component, Input, Output, ElementRef } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
  selector: 'modal-inventario-selector',
  templateUrl: "./app/modals/dialog_inventario.html"
})
export class DialogInventarioComponent {

   open() {
         
        let dialogRef: MdDialogRef<DialogInventarioComponent>;

        dialogRef = this.dialog.open(DialogInventarioComponent);
        

        return dialogRef.afterClosed();

    }
    constructor(
        public dialog: MdDialog
    ) { }

}