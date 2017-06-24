import {Component,  OnInit,  ElementRef,  ViewChild,  ViewContainerRef, Input, Output, EventEmitter} from '@angular/core';
import {PaymentService} from './payment.service';
import {Payment} from './payment';
import {Order} from './../orders/order';
import {OrderService} from './../orders/order.service';
import {Observable } from 'rxjs/Observable';

@Component({
  selector: 'payment',
    providers: [PaymentService,OrderService],
  styleUrls: ["./app/payment/payment.css"],
  templateUrl: "./app/payment/payment.html"
       
})
export class PaymentComponent implements OnInit
{

  public payments:Array<Payment>;
  public folio:number;
  public orders:Array<Order>=[];
  public showModalPayment:boolean = false;
  selectedOrder = new Order;
  
 constructor(private _paymentService:PaymentService,private _orderService:OrderService){

 }
    
    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this._orderService.getOrders().subscribe(
        data => {
          this.orders = data;
          this.selectedOrder = (this.orders && this.orders.length > 0)?this.orders[0]:null;
          this.getOrderPayments();
        }
      )

    }

    getOrderPayments(){
      this._paymentService.getOrderPayments(this.selectedOrder._id).subscribe(
        data=>{
          this.payments = data;
        }
      )
    }
    addPayment(){
        this.showModalPayment = true;
    }
    closeModalPaymeny(){
      this.showModalPayment = false;
    }

}