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
  public clientname:String = "";
  public clientfolio:String = "";


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
}