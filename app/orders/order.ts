import { Cliente } from "../cliente/cliente";
import { Seller } from "../sellers/seller";
import { ProductCotizacion } from "../producto/productCotizacion"
import { TecnicaCotizacion } from "../tecnicas/tecnicaCotizacion"
import {Bordado} from './../tecnicas/bordado'; 
import {Grafico} from './../grafico/grafico'; 
import { User } from "../register/user";
export class Order {
  _id: number;
  client: Cliente;
  seller: Seller;
  user: User;
  products: Array<ProductCotizacion>;
  maquilas: Array<TecnicaCotizacion>;
  tecnicaBordados: Array<Bordado>;
  graficos: Array<Grafico>;
  currentStatus:Array<Number>;
  currentArea:Array<Number>;
  area:number;
  areaText:String;
  total: number;
  folio: number;
  notes:String;
  advance:number;
  descuento:number;
  debt:number;
  shippingWay:String;
  createdAt:Date;
  isPaid:number;
  shippingDate:Date;
  subTotal:number;
  status:number;
  statusText:String;
  paymentDays:number;
  esCotizacion:number;
  orderHistory:Array<String>;
  orderAreaHistory:Array<String>;
  paymentDate:String;

  constructor() {
    this.client = new Cliente;
    this.seller = new Seller;
    this.user = new User;
    this.products = [];
    this.maquilas = [];
    this.tecnicaBordados = [];
    this.graficos = [];
    this.total = 0;
    this.folio = 0;
    this.notes = "";
    this.advance = 0;
    this.descuento = 0;
    this.debt = 0;
    this.shippingWay ="";
    this.shippingDate = new Date;
    this.subTotal = 0;
    this.statusText = "";
    //this.status = -1;
    this.esCotizacion = 0;
    this.orderHistory=[];
    this.orderAreaHistory=[];
    this.paymentDate = "";
  } 


  setOrder(orderHistory:string,_id:number, client:Cliente,user:User,seller:Seller,products:Array<ProductCotizacion>,maquilas:Array<TecnicaCotizacion>,tecnicaBordados:Array<Bordado>, graficos:Array<Grafico>, total:number,folio:number,notes:String,advance:number,debt:number,isPaid:number,createdAt:Date,shippingWay:String,shippingDate:Date,subTotal:number, statusText:String, status:number, esCotizacion:number,paymentDate:String){
    this._id = _id;
    this.client = client;
    this.user = user;
    this.seller = seller;
    this.products = products;
    this.maquilas = maquilas;
    this.tecnicaBordados = tecnicaBordados;
    this.graficos = graficos;
    this.total = total;
    this.folio = folio;
    this.isPaid = isPaid;
    this.createdAt = createdAt;
    this.notes = notes;
    this.advance = advance;
    this.debt = debt;
    this.status = status;
    this.statusText = statusText;
    this.shippingWay = shippingWay;
    this.shippingDate = shippingDate;
    this.subTotal = subTotal;
    this.esCotizacion = esCotizacion;
   this.paymentDate = paymentDate;
  }

  
}
