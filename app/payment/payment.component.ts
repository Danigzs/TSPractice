import {Component,  OnInit,  ElementRef,  ViewChild,  ViewContainerRef, Input, Output, EventEmitter} from '@angular/core';
import {PaymentService} from './payment.service';
import {Payment} from './payment';
import {Observable } from 'rxjs/Observable';

@Component({
  selector: 'payment',
    providers: [PaymentService],
  styleUrls: ["./app/payment/payment.css"],
  templateUrl: "./app/payment/payment.html"
       
})
export class PaymentComponent 
{
    

}