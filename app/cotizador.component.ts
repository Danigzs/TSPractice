import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Component,  OnInit,  ElementRef,  ViewChild,  ViewContainerRef} from '@angular/core';
/*
    Objects
*/
import {Cliente} from './cliente/cliente'
import {Cotizacion} from './cotizacion/cotizacion'
import {Producto} from './producto/producto'
import {Tecnica} from './producto/tecnica'
import {Seller} from './sellers/seller'

import {ProductCotizacion} from './producto/productCotizacion'
import {TecnicaCotizacion} from './tecnicas/tecnicaCotizacion'
import {Order} from './orders/order'
/*
    Services
*/
import {CotizadorService} from './cotizacion/cotizador.service'
import {ClienteService} from './cliente/cliente.service'
import {ProductoService} from './producto/producto.service'
import {OrderService} from './orders/order.service'

import {TecnicaService} from './producto/tecnica.service'
import {SellerService} from './sellers/seller.service'


/**
 * Config bordados  - Models
 */
import {BordadoTipo} from './tecnicas config/BordadoTipo';
import {BordadoPuntadas} from './tecnicas config/BordadoPuntadas';
import {BordadoSize} from './tecnicas config/BordadoSize';
import {Posiciones} from './tecnicas config/posiciones';
 import {Bordado} from './tecnicas/bordado'; 
 import {Sublimado} from './tecnicas/sublimado'; 
 import {Colores} from './tecnicas config/colores'
import {Grafico} from './grafico/grafico'; 
import {Serigrafia} from './tecnicas/serigrafia'; 

import {ChangeDetectorRef} from '@angular/core'







@Component({
  selector: 'cotizador',
  providers: [CotizadorService, ClienteService, ProductoService, TecnicaService, SellerService, OrderService],
  styleUrls: ["app/cotizador.css", "app/styles/table.css"],
  templateUrl: "app/cotizador.html"

})
export class CotizadorComponent implements OnInit {
  
  public viewContainerRef: ViewContainerRef;
  public cotizaciones: Array < any > ;
  public clientes: Array < Cliente > ;
  public sellers: Array < Seller > ;
  public order: Order;
  public productos: Array < ProductCotizacion > ;
  public tecnica: Array <Tecnica>;

   
  
  




  //public productosCotizacion: Array < ProductCotizacion > ;
  public tecnicas: Array < TecnicaCotizacion > ;
  //public maquilasCotizacion: Array < TecnicaCotizacion > = [];
  public hideModal = true;
  public hideModal2 = true;
  public hideModal3 = true;
  public hideModalpago = true;
  public hideModalcliente = true;

  public maquilasModal = true;
  public showBordado = true;
  public showSerigrafia = false;
  public showSublimado = false;
  public pIndex: number;
  public checked = true;
  public checknuevo: boolean;
  public checkexistente: boolean;
  public shippingDate: String = "";

  public context = this
  componentName: 'CotizadorComponent';

  cotizacion = new Cotizacion();

  selectedValue = {};
  productoSelected = new Producto;
  clienteSelected = new Cliente;
  tecnicaSelected = new Tecnica;
  sellerSelected = new Seller;

  /**
   * Config bordado
   */

  
  bordadoTypeSelected:BordadoTipo;
  bordadoStitchSelected = new BordadoPuntadas;
  bordadoSizeSelected = new BordadoSize;
  bordadoPositionSelected = new Posiciones;
  bordadoColorSelected = new Colores;
  


  public hidebordado=true;
  public hideserigrafia=true;
  public hidesublimado = true;

  currentDate = this.getTodayDate();
  gridKeys = ["Cantidad", "Nombre", "Descripcion", "Precio Unitario", "Total"];

  constructor(
    private _cotizadorService: CotizadorService, 
    public _clienteService: ClienteService, 
    private _productoService: ProductoService, 
    private _tecnicaService: TecnicaService, 
    private changeDetectorRef: ChangeDetectorRef, 
    private _sellerService: SellerService, 
    private _orderService: OrderService
    ) {

    this.closeMaquilas = this.closeMaquilas.bind(this);
    this.OnAddBordadoTecnica = this.OnAddBordadoTecnica.bind(this);
    this.OnAddSerigrafia = this.OnAddSerigrafia.bind(this);
    this.OnAddSublimado = this.OnAddSublimado.bind(this);
  }

  openBordados(){
    this.hideserigrafia = true;
    this.hidesublimado = true
    this.hidebordado = false; 
    
  }
   openSerigrafia(){
    this.hidebordado = true;   
    this.hidesublimado = true;
   this.hideserigrafia = false;
   
  }
   openSublimado(){
    this.hidebordado = true;   
   this.hideserigrafia = true;
   this.hidesublimado = false
  }
  setShippingDate() {
    var d = new Date();
    // this.shippingDate = d.getDate().toString() + "/" + d.getMonth().toString() + "/" + d.getFullYear().toString();
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

  OnAddBordadoTecnica(bordado:Bordado){
    debugger
    this.closeMaquilas()
    // this.order.tecnicaBordados.push(bordado.copyNewTecnica());
    var _bordado = new Bordado();
    _bordado =  bordado.copyNewTecnica();
    var _grafico = new Grafico();
    _grafico.setBordado(_bordado);
    this.order.graficos.push(_grafico);
    this.calculateTotal();
  }

  OnAddSerigrafia(serigrafia:Serigrafia){
    debugger
    this.closeMaquilas()
    var _serigrafia = new Serigrafia();
    _serigrafia =  serigrafia.copyNewTecnica();
    var _grafico = new Grafico();
    _grafico.setSerigrafia(_serigrafia);
    this.order.graficos.push(_grafico);
    this.calculateTotal();
  }

  OnAddSublimado(sublimado:Sublimado){
    debugger
    this.closeMaquilas()
    var _sublimado = new Sublimado();
    _sublimado =  sublimado.copyNewTecnica();
    var _grafico = new Grafico();
    _grafico.setSublimado(_sublimado);
    this.order.graficos.push(_grafico);
    this.calculateTotal();
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

  getProductPrice(product:ProductCotizacion){

      if(product.quantity >=1 && product.quantity<=12){
        var price = product.price + product.price * .25;
        return price + price * .16;
      }
      else if(product.quantity >=13 && product.quantity<=50){
        var price = product.price + product.price * .21;
        return price + price * .16;
      }
      else if(product.quantity >=51 && product.quantity<=200){
        var price = product.price + product.price * .17;
        return price + price * .16;
      }
      else if(product.quantity > 200){
        var price = product.price + product.price * .13;
        return price + price * .16;
      }

  }
  calculateTotal() {

    var _total = 0;
    for (let producto of this.order.products) {
      _total += this.getProductPrice(producto); //producto.price * producto.quantity;
    }
    for (let grafico of this.order.graficos) {
      _total += grafico.price * grafico.quantity;
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
    return  this.getProductPrice(producto) * producto.quantity;
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


  getConfigData(): Promise < boolean > {
    return new Promise < boolean > ((resolve, reject) => {

      Observable.forkJoin(
        this._clienteService.getClients(),
        this._productoService.getProducts(),
        this._tecnicaService.getTecnicas(),
        this._sellerService.getSellers()

      ).subscribe(
        results => {
          
          this.clientes = results[0];
          this.productos = this.getProductsCotizacionFromProducts(results[1]);
          this.tecnicas = this.getTecnicasCotizacionFromTecnicas(results[2]);
          this.sellers = results[3];

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
        alert("Pedido Creado");
         
      }
    );


  }
   
  ngOnInit() {
  
    this.order = new Order;
    // this.order.folio = "300";
    this.getConfigData().then(res => {
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
      this.order.tecnicaBordados = [];
      
      this.setShippingDate();

    });
  }
}
