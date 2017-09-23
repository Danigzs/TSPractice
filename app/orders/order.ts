import { Cliente } from "../cliente/cliente";
import { Seller } from "../sellers/seller";
import { ProductCotizacion } from "../producto/productCotizacion"
import { TecnicaCotizacion } from "../tecnicas/tecnicaCotizacion"
import {Bordado} from './../tecnicas/bordado'; 
export class Order {
  _id: number;
  client: Cliente;
  seller: Seller;
  products: Array<ProductCotizacion>;
  maquilas: Array<TecnicaCotizacion>;
  tecnicaBordados: Array<Bordado>;
  total: number;
  folio: number;
  notes:String;
  advance:number;
  debt:number;
  shippingWay:String;
  createdAt:Date;
  isPaid:number;
  shippingDate:Date;
  subTotal:number;
  status:number;
  paymentDays:number;
  constructor() {
    this.client = new Cliente;
    this.seller = new Seller;
    this.products = [];
    this.maquilas = [];
    this.tecnicaBordados = [];
    this.total = 0;
    this.folio = 0;
    this.notes = "";
    this.advance = 0;
    this.debt = 0;
    this.shippingWay ="";
    this.shippingDate = new Date;
    this.subTotal = 0;
  } 


  setOrder(_id:number, client:Cliente,seller:Seller,products:Array<ProductCotizacion>,maquilas:Array<TecnicaCotizacion>,tecnicaBordados:Array<Bordado>, total:number,folio:number,notes:String,advance:number,debt:number,isPaid:number,createdAt:Date,shippingWay:String,shippingDate:Date,subTotal:number){
    this._id = _id;
    this.client = client;
    this.seller = seller;
    this.products = products;
    this.maquilas = maquilas;
    this.tecnicaBordados = tecnicaBordados;
    this.total = total;
    this.folio = folio;
    this.isPaid = isPaid;
    this.createdAt = createdAt;
    this.notes = notes;
    this.advance = advance;
    this.debt = debt;
    this.shippingWay = shippingWay;
    this.shippingDate = shippingDate;
    this.subTotal = subTotal;
  }
}
