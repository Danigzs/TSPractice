import {Injectable} from '@angular/core';
import {Http,  Response} from '@angular/http';
import {Headers,  RequestOptions} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Payment} from './payment';
@Injectable()
export class PaymentService{
    payments:Array<Payment>
    private url = 'http://localhost:8000/api/payments'; // URL to web API
      private urlOrderPayments = 'http://localhost:8000/api/getOrderPayments'; // URL to web API
  constructor(private http: Http) {}

  getPayments(): Observable < Array < Payment >> {
        return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);  
}
 getOrderPayments(order_id:number): Observable < Array < Payment >> {
   let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let myParams = new URLSearchParams();
    myParams.append('id', order_id.toString()); 
   let options = new RequestOptions(); 
   options.headers = headers;
   options.search = new URLSearchParams();
   options.search.append('id',order_id.toString());

        return this.http.get(this.urlOrderPayments,options)
      .map(this.extractData)
      .catch(this.handleError);  
}

ddPayment(payment: Payment): Observable < Array < Payment >> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.url, payment, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {

    let data = res.json();

    return data.payments || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}