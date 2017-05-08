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
import {ChangeDetectorRef} from '@angular/core'



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
  public viewContainerRef: ViewContainerRef;
  public cotizaciones: Array < any > ;
  public clientes: Array < Cliente > ;
  public productos: Array < Producto >;
  public productosCotizacion: Array  <Producto>;
  public tecnicas: Array <Tecnica>;
  public hideModal = true;
  public hideModal2 = true;
  public hideModal3 = true;
  public pIndex:number;
  // dialogRef: MdDialogRef<DialogProductoComponent>;
  componentName: 'CotizadorComponent';
  // dialogProducto = DialogProductoComponent;

  cotizacion = new Cotizacion();   
  
  totalCotizacion = 0.0;
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

      for (let tecnica of producto.tecnicas) {
        _total += producto.cantidad * tecnica.precio;
      }
    }
    
    this.totalCotizacion = _total;
  }
 

  init(){
    this.cotizacion.numeroCotizacion = "000000000001";
    

  }
  getTodayDate() {
    return new Date().toLocaleDateString();
  }
 // open() {
   // let dialogRef: MdDialogRef < DialogProductoComponent > ;
    //dialogRef = this.dialog.open(DialogProductoComponent);
    //return dialogRef.afterClosed();
  //}


  //Modal
  verProductos(){
    this.hideModal = false;
  }
    verTecnica(index:number){
    this.pIndex = index;
    this.hideModal2 = false;
    this.setTecnicasSelected();
  }

  setTecnicasSelected(){
    for (let tecnicaP of this.productos[this.pIndex].tecnicas) {
      for (let tecnica of this.tecnicas) {
        if(tecnicaP.id == tecnica.id){
          tecnica.selected = true;
          break;
        }
      }
    }
  }
   
  Details(){
    this.hideModal3 = false;
  }
  closeModal(){
    this.hideModal = true;
  }
 
  closeTecnicas(){
    this.hideModal2 = true;
    for (let tecnica of this.tecnicas) {
        if(!this.isTecnicaSelected(tecnica)){
          if(this.alreadyTecnicaAdded(tecnica)){
            this.deleteTecnica(tecnica);
            }  
            
        }
        else{
          if(!this.alreadyTecnicaAdded(tecnica)){
              this.productos[this.pIndex].tecnicas.push(tecnica.copyNewTecnica());
            }
        }
    }
    this.resetTecnicas();
    this.calculateTotal();
  }
  resetTecnicas(){
    for (let tecnica of this.tecnicas) {
    
      tecnica.selected = false;
    }
  }
  alreadyTecnicaAdded(tecnicaToAdd:Tecnica){
      for (let tecnica of this.productos[this.pIndex].tecnicas) {
        if(tecnica.id == tecnicaToAdd.id){
          return true;
        }
      }
      return false;
  }
  deleteTecnica(tecnica:Tecnica){
    for(var i = 0;i<this.productos[this.pIndex].tecnicas.length;i++){
      if(this.productos[this.pIndex].tecnicas[i].id = tecnica.id){
          this.productos[this.pIndex].tecnicas.splice(i, 1);
      }
    }
  }
  calcularTotalProducto(producto:Producto){
      var total = producto.precio * producto.cantidad
      for (let tecnica of producto.tecnicas) {
        total += producto.cantidad * tecnica.precio;
      }
      return total
  }
  closeModal2(){  
    this.hideModal3 = true;  
    this.hideModal2 = false;
  }
  seleccionarProducto(producto:Producto){
    this.addProducto(producto);
    this.closeModal();
  }
  selectTecnica(tecnica:Tecnica){
    tecnica.selected=(tecnica.selected==undefined||tecnica.selected==null)?true:!tecnica.selected;
    
  }
  isTecnicaSelected(tecnica:Tecnica){
    if(tecnica.selected==undefined || tecnica.selected == null){
      return false;
    }
    return tecnica.selected;
  }

   deleteRow(rowNumber: number){
    this.productosCotizacion.splice(rowNumber, 1);
    this.changeDetectorRef.detectChanges();
    this.calculateTotal()
    
}

  constructor(private dialog: MdDialog, _cotizadorService: CotizadorService, _clienteService: ClienteService, _productoService: ProductoService, _tecnicaService: TecnicaService, private changeDetectorRef:ChangeDetectorRef) {
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