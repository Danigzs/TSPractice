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
import { UserService } from '../security/user.service';


@Component({
  selector: 'payment',
  providers: [PaymentService, OrderService],
  styleUrls: ["./app/payment/payment.css","app/styles/table.css"],
  templateUrl: "./app/payment/payment.html"

})
export class PaymentComponent implements OnInit {

  public payments: Array < Payment >;
  public payment: Payment;
  public folio: number;
  public orders: Array < Order >= [];
  public showModalPayment: boolean = false;
  public totalPayments: number = 0;
  selectedOrder = new Order(); 
  todayDate = (new Date).toDateString();
  constructor(private _paymentService: PaymentService, private _orderService: OrderService, private _userService: UserService) {

  }

  reloadData(){
    this.payment = new Payment;
    this.payments = [];
    this.selectedOrder = new Order();
    var esAdmin = this._userService.isUserAdmin();
    if(esAdmin){
      this._orderService.getOrders().subscribe(
        data => {
          this.orders = data;
          this.selectedOrder = (this.orders && this.orders.length > 0) ? this.orders[0] : null;
          if(this.selectedOrder == null){
            this.selectedOrder = new Order();
          }
          this.getOrderPayments();
        }
      )
    }
    else {
      this._orderService.getOrdersByUser(this._userService.getUser()).subscribe(
        data => {
          this.orders = data;
          this.selectedOrder = (this.orders && this.orders.length > 0) ? this.orders[0] : null;
          if(this.selectedOrder == null){
            this.selectedOrder = new Order();
          }
          this.getOrderPayments();
        }
      )
    }
    
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.reloadData();
    // this.payment = new Payment;
    // this.payments = [];
    // this.selectedOrder = new Order();
    // this._orderService.getOrdersByUser(this._userService.getUser()).subscribe(
    //   data => {
    //     this.orders = data;
    //     this.selectedOrder = (this.orders && this.orders.length > 0) ? this.orders[0] : null;
    //     if(this.selectedOrder == null){
    //       this.selectedOrder = new Order();
    //     }
    //     this.getOrderPayments();
    //   }
    // )

  }
  calculateTotalPayments(){
    this.payments.forEach(payment=> {
        this.totalPayments += payment.amount;
    });
  }
  getOrderPayments() {
    if(this.selectedOrder && this.selectedOrder._id){
      this._paymentService.getOrderPayments(this.selectedOrder._id).subscribe(
        data => {
          this.payments = [];
          this.payments = data;
          this.calculateTotalPayments();
        }
      )
    }
    else {
      this.payments = [];
    }
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
    if ( this.payment.amount <= this.selectedOrder.debt - this.selectedOrder.pagosTotales) {
      this._paymentService.makePayment(this.payment).subscribe(
        data => {
          this.closeModalPayment();
          alert(data.message);
          this.reloadData();
        }
      );
    }else{
      alert("La cantidad a pagar no puede ser mayor al adeudo");
    }
  }
}
