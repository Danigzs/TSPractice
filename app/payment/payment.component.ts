import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  PaymentService
} from './payment.service';
import {
  Payment
} from './payment';
import {
  Order
} from './../orders/order';
import {
  OrderService
} from './../orders/order.service';
import {
  Observable
} from 'rxjs/Observable';


@Component({
  selector: 'payment',
  providers: [PaymentService, OrderService],
  styleUrls: ["./app/payment/payment.css"],
  templateUrl: "./app/payment/payment.html"

})
export class PaymentComponent implements OnInit {

  public payments: Array < Payment >;
  public payment: Payment;
  public folio: number;
  public orders: Array < Order >= [];
  public showModalPayment: boolean = false;
  public totalPayments: number = 0;
  selectedOrder = new Order; 
  todayDate = (new Date).toDateString();
  constructor(private _paymentService: PaymentService, private _orderService: OrderService) {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.payment = new Payment;
    this.payments = [];
    this._orderService.getOrders().subscribe(
      data => {
        this.orders = data;
        this.selectedOrder = (this.orders && this.orders.length > 0) ? this.orders[0] : null;
        this.getOrderPayments();
      }
    )

  }
  calculateTotalPayments(){
    this.payments.forEach(payment=> {
        this.totalPayments += payment.amount;
    });
  }
  getOrderPayments() {
    this._paymentService.getOrderPayments(this.selectedOrder._id).subscribe(
      data => {
        this.payments = [];
        this.payments = data;
        this.calculateTotalPayments();
      }
    )
  } 
   
  addPayment() {
    this.showModalPayment = true;
  }
  closeModalPayment() {
    this.showModalPayment = false;
  }
  makePayment() {
    this.payment.order_id = this.selectedOrder._id ;
    if(this.payment.amount <= 0){
        alert("La canitdad a pagar debe de ser mayor a 0");
        return
    }
    if ( this.payment.amount <= this.selectedOrder.debt) {
      this._paymentService.makePayment(this.payment).subscribe(
        data => {
          this.closeModalPayment();
          alert(data.message);
          this.getOrderPayments();
        }
      );
    }else{
      alert("La cantidad a pagar no puede ser mayor al adeudo");
    }
  }
}
