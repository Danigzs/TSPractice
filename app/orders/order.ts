import { Cliente } from "../cliente/cliente";
import { Seller } from "../sellers/seller";
import { ProductCotizacion } from "../producto/productCotizacion"
import { TecnicaCotizacion } from "../tecnicas/tecnicaCotizacion"
export class Order {
  _id: String;
  client: Cliente;
  seller: Seller;
  products: Array<ProductCotizacion>;
  maquilas: Array<TecnicaCotizacion>;
  total: number;
  folio: String;
  notes:String;
  advance:number;
  debt:number;
  shippingWay:String;
  createdAt:Date;
  isPaid:number;
  shippingDate:number;
  constructor() {
    this.client = new Cliente;
    this.seller = new Seller;
    this.products = [];
    this.maquilas = [];
    this.total = 0;
    this.folio = "";
    this.notes = "";
    this.advance = 0;
    this.debt = 0;
    this.shippingWay ="";
    this.shippingDate = Date.now();
  } 

  setOrder(client:Cliente,seller:Seller,products:Array<ProductCotizacion>,maquilas:Array<TecnicaCotizacion>,total:number,folio:String,notes:String,advance:number,debt:number,isPaid:number,createdAt:Date,shippingWay:String,shippingDate:number){
    this.client = client;
    this.seller = seller;
    this.products = products;
    this.maquilas = maquilas;
    this.total = total;
    this.folio = folio;
    this.isPaid = isPaid;
    this.createdAt = createdAt;
    this.notes = notes;
    this.advance = advance;
    this.debt = debt;
    this.shippingWay = shippingWay;
    this.shippingDate = shippingDate;
  }
}
