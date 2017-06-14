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
  total: Number;
  folio: String;
  notes:String;
  advance:Number;
  discount:Number;
  shippingWay:String;
  shippingDate:Number;
  constructor() {
    this.client = new Cliente;
    this.seller = new Seller;
    this.products = [];
    this.maquilas = [];
    this.total = 0;
    this.folio = "";
    this.notes = "";
    this.advance = 0;
    this.discount = 0;
    this.shippingWay ="";
    this.shippingDate = Date.now();
  } 

  setOrder(client:Cliente,seller:Seller,products:Array<ProductCotizacion>,maquilas:Array<TecnicaCotizacion>,total:Number,folio:String,notes:String,advance:Number,discount:Number,shippingWay:String,shippingDate:Number){
    this.client = client;
    this.seller = seller;
    this.products = products;
    this.maquilas = maquilas;
    this.total = total;
    this.folio = folio;
    this.notes = notes;
    this.advance = advance;
    this.discount = discount;
    this.shippingWay = shippingWay;
    this.shippingDate = shippingDate;
  }
}
