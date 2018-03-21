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
import {Area} from './areas/area'
import {AreaService} from'./areas/area.service'
/*
    Services
*/
import {CotizadorService} from './cotizacion/cotizador.service'
import {ClienteService} from './cliente/cliente.service'
import {ProductoService} from './producto/producto.service'
import {OrderService} from './orders/order.service'

import {TecnicaService} from './producto/tecnica.service'
import {SellerService} from './sellers/seller.service'
import { IMultiSelectOption,IMultiSelectTexts ,IMultiSelectSettings} from 'angular-2-dropdown-multiselect';


/**
 * Config bordados  - Models
 */
import {BordadoTipo} from './tecnicas_config/BordadoTipo';
import {BordadoPuntadas} from './tecnicas_config/BordadoPuntadas';
import {BordadoSize} from './tecnicas_config/BordadoSize';
import {Posiciones} from './tecnicas_config/posiciones';
 import {Bordado} from './tecnicas/bordado'; 
 import {Sublimado} from './tecnicas/sublimado'; 
 import {Colores} from './tecnicas_config/colores'
import {Grafico} from './grafico/grafico'; 
import {Serigrafia} from './tecnicas/serigrafia'; 
import {Vinil} from './tecnicas/vinil'; 
import {Transfer} from './tecnicas/transfer'; 
import { NavigationExtras,Routes,RouterModule, Router, Route,ActivatedRoute} from '@angular/router';
import {User} from "./register/user"



import {ChangeDetectorRef} from '@angular/core'
import { debug } from 'util';
import { read } from 'fs';
import { UserService } from './security/user.service';







@Component({
  selector: 'cotizador-edit',
  providers: [AreaService,CotizadorService, ClienteService, ProductoService, TecnicaService, SellerService, OrderService,UserService],
  styleUrls: ["app/cotizador.css", "app/styles/table.css"],
  templateUrl: "app/cotizador.edit.html"

})
export class CotizadorEditComponent implements OnInit {
  
  public viewContainerRef: ViewContainerRef;
  public cotizaciones: Array < any > ;
  public clientes: Array < Cliente > ;
  public sellers: Array < Seller > ;
  public users: Array < User > ;
  public order: Order;
  public productos: Array < ProductCotizacion > ;
  public tecnica: Array <Tecnica>;
  public user: User;
  public areas:Array <Area>;
  areaOptions: any[];
  colorOptions: any[];

  
  isUserAdmin:Boolean;



  //public productosCotizacion: Array < ProductCotizacion > ;
  public tecnicas: Array < TecnicaCotizacion > ;
  //public maquilasCotizacion: Array < TecnicaCotizacion > = [];
  public hideModal = true;
  public hideModal2 = true;
  public hideModal3 = true;
  public hideModalpago = true;
  public hideModalcliente = true;
public dataLoaded = false;
  public maquilasModal = true;
  public showBordado = true;
  public showSerigrafia = false;
  public showSublimado = false;
  public pIndex: number;
  public checked = true;
  public checknuevo: boolean;
  public checkexistente: boolean;
  public shippingDate: String = "";

  public firsTimeStatus = true;
  public firsTimeArea = true;
  public context = this
  componentName: 'CotizadorComponent';

  cotizacion = new Cotizacion();

  selectedValue = {};
  productoSelected = new Producto;
  clienteSelected = new Cliente;
  tecnicaSelected = new Tecnica;
  sellerSelected = new Seller;
  userSelected = new User;
  

  /**
   * Config bordado
   */

  
  bordadoTypeSelected:BordadoTipo;
  bordadoStitchSelected = new BordadoPuntadas;
  bordadoSizeSelected = new BordadoSize;
  bordadoPositionSelected = new Posiciones;
  bordadoColorSelected = new Colores;
  
  multiConfig: IMultiSelectTexts = {
    checkAll: 'Seleccionar todos',
    uncheckAll: 'Deseleccionar todos',
    checked: 'color seleccionado',
    checkedPlural: 'colores seleccionados',
    searchPlaceholder: 'Buscar',
    searchEmptyResult: 'Vacío...',
    defaultTitle: 'Estatus',
    allSelected: 'Todos seleccionados',
  };
  multiConfigArea: IMultiSelectTexts = {
    checkAll: 'Seleccionar todos',
    uncheckAll: 'Deseleccionar todos',
    checked: 'color seleccionado',
    checkedPlural: 'colores seleccionados',
    searchPlaceholder: 'Buscar',
    searchEmptyResult: 'Vacío...',
    defaultTitle: 'Area',
    allSelected: 'Todos seleccionados',
  };
  mySettings: IMultiSelectSettings = {
    selectionLimit: 1,
    closeOnClickOutside:true,
    autoUnselect: true,
    checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-default btn-block',
    maxHeight: '300px'
  
  };
  myAreaSettings: IMultiSelectSettings = {
    selectionLimit: 1,
    closeOnClickOutside:true,
    autoUnselect: true,
    checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-default btn-block',
    maxHeight: '300px'
  
  };


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
    private _orderService: OrderService,
    private route: ActivatedRoute,
    private _areasService:AreaService
    private _userService:UserService
    ) {

    this.closeMaquilas = this.closeMaquilas.bind(this);
    this.OnAddBordadoTecnica = this.OnAddBordadoTecnica.bind(this);
    this.OnAddSerigrafia = this.OnAddSerigrafia.bind(this);
    this.OnAddSublimado = this.OnAddSublimado.bind(this);
    this.OnAddTransfer = this.OnAddTransfer.bind(this);
    this.OnAddVinil = this.OnAddVinil.bind(this);
    this.OnClientAdded = this.OnClientAdded.bind(this);
  }

  OnClientAdded(){
    alert("Cliente creado");
    this._clienteService.getClients().subscribe(
      clients => {
        this.clientes = clients
        if (this.clientes.length > 0)
          this.clienteSelected = this.clientes[0];
      }
    );
    this.hideModalcliente = true;
  }

  getDateTime(){
    var d = new Date();
    var hora = d.getHours();    
    var minutos = d.getMinutes();
    var segundos = d.getSeconds();
    var date = d.toLocaleString();
    var hour = hora.toString();
    var minutes = minutos.toString();
    var seconds = segundos.toString();
    var fecha = (date +" "+ hour+":"+minutes+":"+seconds).toString();
    return  fecha;
  }

  onChangeOrderStatus(event:Event,order:Order){
    if(this.firsTimeStatus == true){
      this.firsTimeStatus = false;
      return;
    }
     
    if(order.currentStatus.length > 0){
     
    //var tmpOrder = this.order;
    var nombreStatus= this.colorOptions.find(function(v,i){
      return order.currentStatus[0] == v.id}).name;
    order.status = +order.currentStatus[0];
    
    }
    
  }


  onChangeAreaStatus(event:Event,order:Order){
    if(this.firsTimeArea == true){
      this.firsTimeArea = false;
      return;
    }
    if(order.currentArea.length > 0){
    console.log(order.currentArea)
    
    var nombreArea= this.areas.find(function(v,i){return order.currentArea[0] == v._id}).nombre
   
    order.area =+ order.currentArea[0];
    console.log(order.currentArea)
    }
  }

  ConvertToPedido(){
    var tmpOrder = this.order;
    this.order.areaText = this.areas.find(function(v,i){ return v._id == tmpOrder.area}).nombre;

    this.order.esCotizacion = 0;
  }
  ConvertToCotizacion(){
    this.order.esCotizacion = 1;
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
    console.warn(this.userSelected);
  }


  
  updateAdvance(event: Event){
    if(this.order.total -  this.order.advance >= 0)
      {
        this.order.debt  =Math.round((this.order.total -  this.order.advance)*100)/100;
      }
    else{
        this.order.advance = 0;
    }
  }

  OnAddBordadoTecnica(bordado:Bordado){
    
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
    this.closeMaquilas()
    var _serigrafia = new Serigrafia();
    _serigrafia =  serigrafia.copyNewTecnica();
    var _grafico = new Grafico();
    _grafico.setSerigrafia(_serigrafia);
    this.order.graficos.push(_grafico);
    this.calculateTotal();
  }

  OnAddSublimado(sublimado:Sublimado){
    this.closeMaquilas()
    var _sublimado = new Sublimado();
    _sublimado =  sublimado.copyNewTecnica();
    var _grafico = new Grafico();
    _grafico.setSublimado(_sublimado);
    this.order.graficos.push(_grafico);
    this.calculateTotal();
  }
  OnAddTransfer(transfer:Transfer){
    
    this.closeMaquilas()
    var _transfer = new Transfer();
    _transfer =  transfer.copyNewTecnica();
    var _grafico = new Grafico();
    _grafico.setTransfer(_transfer);
    this.order.graficos.push(_grafico);
    this.calculateTotal();
  }
  OnAddVinil(vinil:Vinil){
    
    this.closeMaquilas()
    var _vinil = new Vinil();
    _vinil =  vinil.copyNewTecnica();
    var _grafico = new Grafico();
    _grafico.setVinil(_vinil);
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
      _total += this.getProductPrice(producto) * producto.quantity; //producto.price * producto.quantity;
    }
    for (let grafico of this.order.graficos) {
      _total += grafico.costoTotal * grafico.quantity;
    }

    this.order.total =Math.round((_total)*100)/100; 
    if(this.order.descuento > 0 && this.order.total > 0 ){
      this.order.total = this.order.total - (this.order.total * (this.order.descuento/100));
     }
  }


  init() {
    this.cotizacion.numeroCotizacion = "000000000001";


  }
  getTodayDate() {
    return this.getDateTime();
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
  deleteGraficoRow(rowNumber: number) {
    this.order.graficos.splice(rowNumber, 1);
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
        this._userService.getSellerUsers(),
        this._areasService.getAreas()

      ).subscribe(
        results => {
          
          this.clientes = results[0];
          this.productos = this.getProductsCotizacionFromProducts(results[1]);
          this.tecnicas = this.getTecnicasCotizacionFromTecnicas(results[2]);
          this.users = results[3];
          this.areas = results[4]
          console.log(this.areas);
          
 
           resolve(true)
        }
      );
    });
  }

 

  CreateOrder() {
  
    this.order.client = this.clienteSelected;
    // this.order.seller = this.sellerSelected;
    this.order.user  = this.userSelected;
    this.order.debt =Math.round(( this.order.total -  this.order.advance)*100)/100;
    if(this.order.debt == 0){
      this.order.isPaid = 1;
    }
    else {
      this.order.isPaid = 0;

    }
    
    var user = window.localStorage.getItem("user");
    if(user){
      this.user = JSON.parse(user);
    }
    this.order.usercreador = this.user;

    var tmpOrder = this.order;

    this.order.areaText = this.areas.find(function(v,i){ return v._id == tmpOrder.area}).nombre;
    
    var dateTime = this.getDateTime()

   this.order.statusText = this.colorOptions.find(function(v,i){ return v.id == tmpOrder.status}).name;
   if(tmpOrder.status == 2){
     this.order.paymentDate = dateTime;
   }

   var nombreArea= this.areas.find(function(v,i){return tmpOrder.area == v._id}).nombre
      var user = window.localStorage.getItem("user");
      if(user){
        this.user = JSON.parse(user);
       
      var fecha = (dateTime + " Usuario "+ this.user.username).toString();
      tmpOrder.orderAreaHistory.push((nombreArea + " "+ fecha));

      var nombreStatus= this.colorOptions.find(function(v,i){
        return tmpOrder.status == v.id}).name;
      
      tmpOrder.orderHistory.push((nombreStatus + " "+ fecha));

      }

    this._orderService.updateOrder(this.order).subscribe(
      data => {
        console.log("order added");
        alert("Cambios guardados");
        
         
      }
    );
    

  }
   
getOrderById(orderId:Number){
  this._orderService.findById(orderId).subscribe(
    data=>{
      this.order = new Order;
      this.order  = data[0];
      console.log(this.order);
      this.getConfigData().then(res => {
        if (this.clientes.length > 0)
        {
          this.clienteSelected = this.clientes[0];
        }
        if (this.tecnicas.length > 0)
        {
          this.tecnicaSelected = this.tecnicas[0];
        }
        if (this.productos.length > 0)
        {
          this.productoSelected = this.productos[0];
        }
  
        if (this.users.length > 0)
        {
          //this.sellerSelected = this.sellers[0];
          for(var i = 0 ; i < this.users.length; i++){
            if(this.order.user){
              if(this.users[i]._id == this.order.user._id){
                this.userSelected = this.users[i];
              }
            }
            else {
                this.userSelected = this.users[0];
            }
            
          }
          for(var i = 0 ; i < this.clientes.length; i++){
            if(this.clientes[i]._id == this.order.client._id){
              this.clienteSelected = this.clientes[i];
            }
          }
          
        }
        this.cotizacion.tecnica = this.tecnicaSelected;
        this.cotizacion.cliente = this.clienteSelected;
        this.productos = this.productos;
        this.cotizacion.producto = this.productoSelected;
        this.firsTimeArea = true;
        this.firsTimeStatus= true; 

        this.areaOptions = this.areas.map((area,index) =>  ({id : area._id,name:area.nombre }));   
        this.colorOptions = [
          { id: 0, name: 'Pendiente de Pago'},
          { id: 1, name: 'En Proceso'},
          { id: 2, name: 'Pagada' },
          { id: 3, name: 'Entregada'},
          { id: 4, name: 'Cancelada'}
    
        ];
            
        setTimeout(() => {
          

        this.order.currentArea = [this.order.area];
        this.order.currentStatus = [this.order.status]; 
        
        this.dataLoaded = true;
      }, 2000); 
      });
    }
  )
}

  ngOnInit() {
    this.isUserAdmin = this._userService.isUserAdmin();
    this.order = new Order;
    this.areaOptions = [
      
    ]
    this.colorOptions = [
      

    ];
    
    this.route.params.subscribe(params=> { 
      
      console.log(params);
      this.getOrderById(params["id"]);
       
    
    });
    
    
    // this.order.folio = "300";
    
  }
}