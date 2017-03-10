import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,ViewContainerRef
} from '@angular/core';
import {
    CotizadorService
} from './cotizador.service';
import {
    ClienteService
} from './cliente/cliente.service'
import {
    Cliente
} from './cliente/cliente'
import {
    DialogProductoComponent
} from './modals/dialog.producto.component'
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

// import { Modal } from './modals/modalAgregarProducto';

 
@Component({
    selector: 'cotizador',
    // directives: [ Modal ],
    providers: [CotizadorService, ClienteService],
    styleUrls: ["app/cotizador.css"],
    templateUrl: "app/cotizador.html"
 




})
export class CotizadorComponent {
    // dialogRef: MdDialogRef<DialogProductoComponent>;
    componentName: 'CotizadorComponent';
    // dialogProducto = DialogProductoComponent;
    public viewContainerRef: ViewContainerRef;
    public cotizaciones: Array < any > ;
    public clientes: Array < Cliente > ;
    selectedValue = {};
    clienteSelected = {};
    updateCliente(event:Event) {
        console.log(event);
    }
    open() {
         
        let dialogRef: MdDialogRef<DialogProductoComponent>;

        dialogRef = this.dialog.open(DialogProductoComponent);
        

        return dialogRef.afterClosed();

    }
        constructor(private dialog: MdDialog,_cotizadorService: CotizadorService, _clienteService: ClienteService) { 
            this.clientes = _clienteService.getClientes();
            this.clienteSelected = this.clientes[0];

        }

   
}