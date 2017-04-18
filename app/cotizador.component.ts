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
  providers: [CotizadorService, ClienteService, ProductoService, TecnicaService],
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
  public productosCotizacion: Array  <Producto>;
  public tecnicas: Array <Tecnica>;
  totalCotizacion = 0.0;
  public hideModal = true;

  selectedValue = {};
  productoSelected = new Producto;
  clienteSelected = new Cliente;
  tecnicaSelected = new Tecnica;
  
  currentDate = this.getTodayDate();
  gridKeys = ["Cantidad","Nombre","Descripcion","Precio Unitario","Total"];
  updateCliente(event: Event) {
    console.warn(this.clienteSelected);
  }

  updateTecnica(event: Event) {
    console.warn(this.tecnicaSelected);
  }

  updateProducto(event: Event) {
    console.warn(this.productoSelected);
  }

  addProducto(producto:Producto){
    producto.total = producto.precio * producto.cantidad;
    this.productosCotizacion.push(producto);
    this.calculateTotal();
  }
  calculateTotal(){
    
    var _total = 0;
    for(let producto of this.productosCotizacion){
      _total += producto.precio * producto.cantidad;
    }
    this.totalCotizacion = _total;

  }
 

  init(){
    this.cotizacion.numeroCotizacion = "000000000001";
    

  }
  getTodayDate() {
    return new Date().toLocaleDateString();
  }
  open() {
    let dialogRef: MdDialogRef < DialogInventarioComponent > ;
    dialogRef = this.dialog.open(DialogInventarioComponent);
    return dialogRef.afterClosed();
  }


  //Modal
  verProductos(){
    this.hideModal = false;
  }
  closeModal(){
    this.hideModal = true;
  }
  seleccionarProducto(producto:Producto){
    this.addProducto(producto);
    this.closeModal();
  }
  constructor(private dialog: MdDialog, _cotizadorService: CotizadorService, _clienteService: ClienteService, _productoService: ProductoService, _tecnicaService: TecnicaService) {
    this.clientes = _clienteService.getClientes();
    this.productos = _productoService.getProductos();
    this.tecnicas = _tecnicaService.getTecnicas();
    this.clienteSelected = this.clientes[0];
    this.tecnicaSelected = this.tecnicas[0];
    this.cotizacion.tecnica = this.tecnicaSelected;
    this.cotizacion.cliente = this.clienteSelected;
    this.productos = this.productos;
    this.productoSelected = this.productos[0];
    this.cotizacion.producto = this.productoSelected;
    this.productosCotizacion = [];
    this.init(); 
    }


}
