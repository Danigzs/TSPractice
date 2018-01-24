import { Component, OnInit, ElementRef} from '@angular/core';
import { OrderService } from "./order.service";
import { Order } from "./order";
import {
  Observable
} from 'rxjs/Observable';

@Component({
  selector: 'orders',
  providers: [OrderService],
  styleUrls: ["app/orders/orders.css", "app/styles/table.css"],
  templateUrl: "app/orders/orders.html"
})
export class OrdersComponent implements OnInit {
  public orders:Array<Order>;
  public order: Order;
  public clientname:String = "";
  public clientfolio:String = "";
  public isEditing:Boolean;


  constructor(private _orderService:OrderService){

  }
  ngOnInit() {
    this.getOrderType.bind(this);
    this._orderService.getOrders().subscribe(
      data=>{
        this.orders = data;
      }
    )
  }
  getOrderType(order:Order){
    if (order.esCotizacion){
      return "Cotización"
    }
    return "Pedido"
  }

setEditMode(edit:boolean,orden:Order){
  this.isEditing = edit;
  if(edit){
    this.order._id = orden._id;
    this.order.seller = orden.seller;
    this.order.client = orden.client;
    this.order.products = orden.products;
    this.order.maquilas = orden.maquilas;
    this.order.tecnicaBordados = orden.tecnicaBordados;
    this.order.graficos = orden.graficos;
    this.order.total = orden.total;


  }
  else {
   
  }
}
}