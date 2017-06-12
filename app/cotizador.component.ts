import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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
import {Cotizacion} from './cotizacion/cotizacion'
import {Producto} from './producto/producto'
import {ProductCotizacion} from './producto/productCotizacion'
import {ProductoService} from './producto/producto.service'
import {Tecnica} from './producto/tecnica'
import {TecnicaCotizacion} from './tecnicas/tecnicaCotizacion'
import {TecnicaService} from './producto/tecnica.service'
import {ChangeDetectorRef} from '@angular/core'



import {
  MdDialog,
  MdDialogConfig,
  MdDialogRef
} from '@angular/material';



@Component({
  selector: 'cotizador',
  providers : [ CotizadorService, ClienteService, ProductoService, TecnicaService],
  styleUrls: ["app/cotizador.css"],
  templateUrl: "app/cotizador.html"

})
export class CotizadorComponent {
  public viewContainerRef: ViewContainerRef;
  public cotizaciones: Array < any > ;
  public clientes: Array < Cliente > ;
  public productos: Array < ProductCotizacion >;
  public productosCotizacion: Array  <ProductCotizacion>;
  public tecnicas: Array <TecnicaCotizacion>;
  public maquilasCotizacion: Array <TecnicaCotizacion> = [];
  public hideModal = true;
  public hideModal2 = true;
  public hideModal3 = true;
  public hideModalcliente=true;
 
  public maquilasModal = true;
   public pIndex:number;
  public checked = true;
  public checknuevo:boolean;
  public checkexistente:boolean;
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


   constructor(private dialog: MdDialog, private _cotizadorService: CotizadorService, public _clienteService: ClienteService, private _productoService: ProductoService,private _tecnicaService: TecnicaService, private changeDetectorRef:ChangeDetectorRef) {

  }
  
  updateCliente(event: Event) {
    console.warn(this.clienteSelected);
  }

  updateTecnica(event: Event) {
    console.warn(this.tecnicaSelected);
  }

  updateProducto(event: Event) {
    console.warn(this.productoSelected);
  }

  addProducto(producto:ProductCotizacion){
    producto.total = producto.price * producto.quantity;
    this.productosCotizacion.push(producto);
    this.calculateTotal();
  }
 seleccionarTecnica(tecnica:TecnicaCotizacion){
   this.maquilasCotizacion.push(tecnica);
   this.calculateTotal();

 }
  closeClientAdded(event:Cliente){
    this.clienteSelected = event;
    this._clienteService.getClients().subscribe(
      clients => {
        this.clientes = clients 
      }
    );
    this.hideModalcliente=true;
  }
  calculateTotal(){
    
    var _total = 0;
    for(let producto of this.productosCotizacion){
      _total += producto.price * producto.quantity;

      // for (let tecnica of producto.tecnicas) {
      //   _total += producto.quantity * tecnica.precio;
      // }
    }
    for(let maquila of this.maquilasCotizacion){
      _total += maquila.price * maquila.quantity;
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
  verMaquilas(){
    this.maquilasModal = false;
  }
    verTecnica(index:number){
    this.pIndex = index;
    this.hideModal2 = false;
    this.setTecnicasSelected();
  }

  setTecnicasSelected(){
    // for (let tecnicaP of this.productos[this.pIndex].tecnicas) {
    //   for (let tecnica of this.tecnicas) {
    //     if(tecnicaP.id == tecnica.id){
    //       tecnica.selected = true;
    //       break;
    //     }
    //   }
    // }
  }
   
  Details(){
    this.hideModal3 = false;
  }
   ClienteModal(){
    this.hideModalcliente= false;
  }
  closeModal(){
    this.hideModal = true;
    this.hideModalcliente=true;
     
  }
 closeMaquilas(){
   this.maquilasModal = true;
   this.calculateTotal();
 }
  closeTecnicas(){
    this.hideModal2 = true;
     
    this.resetTecnicas();
    this.calculateTotal();
  }
  resetTecnicas(){
    // for (let tecnica of this.tecnicas) {
    
    //   tecnica.selected = false;
    // }
  }
  alreadyTecnicaAdded(tecnicaToAdd:Tecnica){
      // for (let tecnica of this.productos[this.pIndex].tecnicas) {
      //   if(tecnica.id == tecnicaToAdd.id){
      //     return true;
      //   }
      // }
      // return false;
  }
  deleteTecnica(tecnica:Tecnica){
    // for(var i = 0;i<this.productos[this.pIndex].tecnicas.length;i++){
    //   if(this.productos[this.pIndex].tecnicas[i].id = tecnica.id){
    //       this.productos[this.pIndex].tecnicas.splice(i, 1);
    //   }
    // }
  }
  calcularTotalProducto(producto:ProductCotizacion){
      var total = producto.price * producto.quantity
      // for (let tecnica of producto.tecnicas) {
      //   total += producto.quantity * tecnica.precio;
      // }
      return total
  }
  closeModal2(){  
    this.hideModal3 = true;  
    this.hideModal2 = false;
    
  }
 
  seleccionarProducto(producto:ProductCotizacion){
    this.addProducto(producto);
    // this.closeModal();
  }
  selectTecnica(tecnica:Tecnica){
    // tecnica.selected=(tecnica.selected==undefined||tecnica.selected==null)?true:!tecnica.selected;
    
  }
  isTecnicaSelected(tecnica:Tecnica){
    // if(tecnica.selected==undefined || tecnica.selected == null){
    //   return false;
    // }
    // return tecnica.selected;
  }

   deleteRow(rowNumber: number){
    this.productosCotizacion.splice(rowNumber, 1);
    this.changeDetectorRef.detectChanges();
    this.calculateTotal()
    
}
getProductsCotizacionFromProducts(_products:Array<Producto>){
  var prodsCot = Array<ProductCotizacion>();
_products.forEach(prod => {
  prodsCot.push(ProductCotizacion.copyFromProduct(prod));

});
return prodsCot;
}
getTecnicasCotizacionFromTecnicas(_tecnicas:Array<Tecnica>){
  var tecnicasCot = Array<TecnicaCotizacion>();
_tecnicas.forEach(tecnica => {
  tecnicasCot.push(TecnicaCotizacion.copyFromTecnica(tecnica));

});
return tecnicasCot;
}
getCPT():Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
 
    Observable.forkJoin(
        this._clienteService.getClients(),
        this._productoService.getProducts(),
         this._tecnicaService.getTecnicas()
    ).subscribe(
      data => {
        
        this.clientes = data[0]
         this.productos = this.getProductsCotizacionFromProducts(data[1])
         this.tecnicas = this.getTecnicasCotizacionFromTecnicas(data[2]);
         resolve(true)
      } 
    );
      });
} 
  ngOnInit() {
  //   this._clienteService.getClients().subscribe(
  //     data=>{
  //       this.clientes = data;
  //     }
  //   );
  //  this._productoService.getProducts().subscribe(
  //    data => {
  //      this.productos = data;
  //    }
  //  );

  //   this._tecnicaService.getTecnicas().subscribe(
  //     data => {
  //       this.tecnicas = data;
  //     }
  //   );
  this.getCPT().then(res => { 
    if(this.clientes.length > 0)
    this.clienteSelected = this.clientes[0];
    if(this.tecnicas.length > 0)
    this.tecnicaSelected = this.tecnicas[0];
    if(this.productos.length > 0)
    this.productoSelected = this.productos[0];

    this.cotizacion.tecnica = this.tecnicaSelected;
    this.cotizacion.cliente = this.clienteSelected;
    this.productos = this.productos;
    this.cotizacion.producto = this.productoSelected;
    this.productosCotizacion = [];
  });
  }
    
 
  
}