import {  Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {  Component,  OnInit,  ElementRef,  ViewChild,  ViewContainerRef} from '@angular/core';

/*
    Objects
*/
import {  Cliente} from './cliente/cliente'
import {  Cotizacion} from './cotizacion/cotizacion'
import {  Producto} from './producto/producto'
import {  Tecnica} from './producto/tecnica'
import {  Seller} from './sellers/seller'

import {  ProductCotizacion} from './producto/productCotizacion'
import {  TecnicaCotizacion} from './tecnicas/tecnicaCotizacion'
import {  Order} from './orders/order'
/*
    Services
*/
import {  CotizadorService} from './cotizacion/cotizador.service'
import {  ClienteService} from './cliente/cliente.service'
import {  ProductoService} from './producto/producto.service'
import {  OrderService} from './orders/order.service'

import {  TecnicaService} from './producto/tecnica.service'
import {  SellerService} from './sellers/seller.service'
import {  ChangeDetectorRef} from '@angular/core'



import {  MdDialog,  MdDialogConfig,  MdDialogRef} from '@angular/material';



@Component({
  selector: 'cotizador',
  providers: [CotizadorService, ClienteService, ProductoService, TecnicaService, SellerService, OrderService],
  styleUrls: ["app/cotizador.css"],
  templateUrl: "app/cotizador.html"

})
export class CotizadorComponent implements OnInit {
  public viewContainerRef: ViewContainerRef;

  public cotizaciones: Array < any > ;
  public clientes: Array < Cliente > ;
  public sellers: Array < Seller > ;
  public order: Order;
  public productos: Array < ProductCotizacion > ;
  //public productosCotizacion: Array < ProductCotizacion > ;
  public tecnicas: Array < TecnicaCotizacion > ;
  //public maquilasCotizacion: Array < TecnicaCotizacion > = [];
  public hideModal = true;
  public hideModal2 = true;
  public hideModal3 = true;
  public hideModalpago = true;
  public hideModalcliente = true;

  public maquilasModal = true;
  public pIndex: number;
  public checked = true;
  public checknuevo: boolean;
  public checkexistente: boolean;
  public shippingDate: String = "";
  componentName: 'CotizadorComponent';

  cotizacion = new Cotizacion();

  tizacion = 0.0;
  selectedValue = {};
  productoSelected = new Producto;
  clienteSelected = new Cliente;
  tecnicaSelected = new Tecnica;
  sellerSelected = new Seller;

  currentDate = this.getTodayDate();
  gridKeys = ["Cantidad", "Nombre", "Descripcion", "Precio Unitario", "Total"];

  constructor(private dialog: MdDialog, private _cotizadorService: CotizadorService, public _clienteService: ClienteService, private _productoService: ProductoService, private _tecnicaService: TecnicaService, private changeDetectorRef: ChangeDetectorRef, private _sellerService: SellerService, private _orderService: OrderService) {}

  setShippingDate() {
    var d = new Date();
    this.shippingDate = d.getDate().toString() + "/" + d.getMonth().toString() + "/" + d.getFullYear().toString();
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
  updateSeller(event: Event) {
    console.warn(this.sellerSelected);
  }
  
  updateAdvance(event: Event){
    if(this.order.total -  this.order.advance >= 0)
      {
        this.order.debt = this.order.total -  this.order.advance;
      }
    else{
        this.order.advance = 0;
    }
  }

  addProducto(producto: ProductCotizacion) {
    producto.total = producto.price * producto.quantity;
    this.order.products.push(producto.copyNewProductCotizacion());
    producto.quantity = 1;
    producto.total = producto.price;
    this.calculateTotal();
  }
  seleccionarTecnica(tecnica: TecnicaCotizacion) {
    tecnica.total = tecnica.price * tecnica.quantity;
    this.order.maquilas.push(tecnica.copyNewTecnica());
    tecnica.quantity = 1;
    tecnica.total = tecnica.price;
    this.calculateTotal();

  }
  closeClientAdded(event: Cliente) {
    this.clienteSelected = event;
    this._clienteService.getClients().subscribe(
      clients => {
        this.clientes = clients
      }
    );
    this.hideModalcliente = true;
  }
  calculateTotal() {

    var _total = 0;
    for (let producto of this.order.products) {
      _total += producto.price * producto.quantity;
    }
    for (let maquila of this.order.maquilas) {
      _total += maquila.price * maquila.quantity;
    }

    this.order.total = _total;
  }


  init() {
    this.cotizacion.numeroCotizacion = "000000000001";


  }
  getTodayDate() {
    return new Date().toLocaleDateString();
  }
  //Modal
  verProductos() {
    this.hideModal = false;
  }
  verMaquilas() {
    this.maquilasModal = false;
  }
  verTecnica(index: number) {
    this.pIndex = index;
    this.hideModal2 = false;
    this.setTecnicasSelected();
  }

  setTecnicasSelected() { 
  }

  Details() {
    this.hideModal3 = false;
  }
  ClienteModal() {
    this.hideModalcliente = false;
  }

  closeModal() {
    this.hideModal = true;
    this.hideModalcliente = true;

  }
  closeMaquilas() {
    this.maquilasModal = true;
    this.calculateTotal();
  }
  closeTecnicas() {

    this.hideModal2 = true;

    this.resetTecnicas();
    this.calculateTotal();
  }
  resetTecnicas() {
    // for (let tecnica of this.tecnicas) {

    //   tecnica.selected = false;
    // }
  }
  alreadyTecnicaAdded(tecnicaToAdd: Tecnica) {
  }
  deleteTecnica(tecnica: Tecnica) {
  }
  calcularTotalProducto(producto: ProductCotizacion) {
    var total = producto.price * producto.quantity
    return total
  }
  closeModal2() {
    this.hideModal3 = true;
    this.hideModal2 = false;

  }

  seleccionarProducto(producto: ProductCotizacion) {
    this.addProducto(producto);
  }
  selectTecnica(tecnica: Tecnica) {

  }
  isTecnicaSelected(tecnica: Tecnica) {
  }

  deleteRow(rowNumber: number) {
    this.order.products.splice(rowNumber, 1);
    this.changeDetectorRef.detectChanges();
    this.calculateTotal()

  }
  getProductsCotizacionFromProducts(_products: Array < Producto > ) {
    var prodsCot = Array < ProductCotizacion > ();
    _products.forEach(prod => {
      prodsCot.push(ProductCotizacion.copyFromProduct(prod));

    });
    return prodsCot;
  }
  getTecnicasCotizacionFromTecnicas(_tecnicas: Array < Tecnica > ) {
    var tecnicasCot = Array < TecnicaCotizacion > ();
    _tecnicas.forEach(tecnica => {
      tecnicasCot.push(TecnicaCotizacion.copyFromTecnica(tecnica));

    });
    return tecnicasCot;
  }
  getCPT(): Promise < boolean > {
    return new Promise < boolean > ((resolve, reject) => {

      Observable.forkJoin(
        this._clienteService.getClients(),
        this._productoService.getProducts(),
        this._tecnicaService.getTecnicas(),
        this._sellerService.getSellers()

      ).subscribe(
        data => {
          this.clientes = data[0]
          this.productos = this.getProductsCotizacionFromProducts(data[1])
          this.tecnicas = this.getTecnicasCotizacionFromTecnicas(data[2]);
          this.sellers = data[3];
          resolve(true)
        }
      );
    });
  }

  CreateOrder() {
    this.order.client = this.clienteSelected;
    this.order.seller = this.sellerSelected;
    this.order.debt = this.order.total -  this.order.advance;
    if(this.order.debt == 0){
      this.order.isPaid = 1;
    }
    else {
      this.order.isPaid = 0;
    }
    console.log(this.order);
    this._orderService.addOrder(this.order).subscribe(
      data => {
        console.log("order added");
      }
    );


  }
  ngOnInit() {
    this.order = new Order;
    // this.order.folio = "300";
    this.getCPT().then(res => {
      if (this.clientes.length > 0)
        this.clienteSelected = this.clientes[0];
      if (this.tecnicas.length > 0)
        this.tecnicaSelected = this.tecnicas[0];
      if (this.productos.length > 0)
        this.productoSelected = this.productos[0];

      if (this.sellers.length > 0)
        this.sellerSelected = this.sellers[0];
      this.cotizacion.tecnica = this.tecnicaSelected;
      this.cotizacion.cliente = this.clienteSelected;
      this.productos = this.productos;
      this.cotizacion.producto = this.productoSelected;

      this.order.products = [];
      this.order.maquilas = [];
      this.setShippingDate();


    });
  }



}
