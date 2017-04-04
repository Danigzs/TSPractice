import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {CotizadorService} from './cotizacion/cotizador.service'
import {ClienteService} from './cliente/cliente.service'
import {Cliente} from './cliente/cliente'
import {DialogProductoComponent} from './modals/dialog.producto.component'
import {Cotizacion} from './cotizacion/cotizacion'
import {Producto} from './producto/producto'
import {ProductoService} from './producto/producto.service'
import {DialogInventarioComponent} from './modals/dialog.inventario.component'
import {Tecnica} from './producto/tecnica'
import {TecnicaService} from './producto/tecnica.service'





import {
  MdDialog,
  MdDialogConfig,
  MdDialogRef
} from '@angular/material';

// import { Modal } from './modals/modalAgregarProducto';


@Component({
  selector: 'cotizador',
  // directives: [ Modal ],
  providers: [CotizadorService, ClienteService, ProductoService],
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
  public productos: Array < Producto >;
  public tecnicas: Array <Tecnica>;

  selectedValue = {};
  productoSelected = new Producto;
  clienteSelected = new Cliente;
  tecnicaSelected = new Tecnica;
  currentDate = this.getTodayDate();
  gridKeys = ["Cantidad","Nombre","Descripcion","Precio Unitario","Total"];
  updateCliente(event: Event) {
    console.warn(this.clienteSelected);
  }

  updateProducto(event: Event) {
    console.warn(this.productoSelected);
  }

  updateTecnica(event: Event) {
    console.warn(this.tecnicaSelected);
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
  constructor(private dialog: MdDialog, _cotizadorService: CotizadorService, _clienteService: ClienteService, _productoService: ProductoService,_tecnicaService: TecnicaService) {
    this.clientes = _clienteService.getClientes();
    this.productos = _productoService.getProductos();
    this.clienteSelected = this.clientes[0];
    this.cotizacion.cliente = this.clienteSelected;
    this.cotizacion.productos = this.productos;
    this.productoSelected = this.productos[0];
    this.cotizacion.producto = this.productoSelected;
    this.tecnicas = _tecnicaService.getTecnicas();
    this.tecnicaSelected=this.tecnicas[0];
    this.cotizacion.tecnica=this.tecnicaSelected;
    this.init(); 
    }


}
