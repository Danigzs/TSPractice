import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  CotizadorService
} from './cotizacion/cotizador.service';
import {
  ClienteService
} from './cliente/cliente.service'
import {
  Cliente
} from './cliente/cliente'
import {
  DialogProductoComponent
} from './modals/dialog.producto.component'

import {
    Cotizacion
} from './cotizacion/cotizacion'

import {
  MdDialog,
  MdDialogConfig,
  MdDialogRef
} from '@angular/material';

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
  cotizacion = new Cotizacion();

  public viewContainerRef: ViewContainerRef;
  public cotizaciones: Array < any > ;
  public clientes: Array < Cliente > ;
  selectedValue = {};
  clienteSelected = new Cliente;
  currentDate = this.getTodayDate();

  updateCliente(event: Event) {
    console.warn(this.clienteSelected);
  }
  init(){
    this.cotizacion.numeroCotizacion = "000000000001";
    

  }
  getTodayDate() {
    return new Date().toLocaleDateString();
  }
  open() {
    let dialogRef: MdDialogRef < DialogProductoComponent > ;
    dialogRef = this.dialog.open(DialogProductoComponent);
    return dialogRef.afterClosed();
  }
  constructor(private dialog: MdDialog, _cotizadorService: CotizadorService, _clienteService: ClienteService) {
    this.clientes = _clienteService.getClientes();
    this.clienteSelected = this.clientes[0];
    this.cotizacion.cliente = this.clienteSelected;
    this.init();
  }


}
