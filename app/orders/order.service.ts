import {  Injectable} from '@angular/core';
import {  Http,  Response} from '@angular/http';
import {  Headers,  RequestOptions} from '@angular/http';
import {  Observable} from 'rxjs/Observable';
import {
  URLSearchParams
} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {  Order} from './order';
import { User } from '../register/user';
@Injectable()
export class OrderService {
  orders: Array < Order > ;
  private url = 'http://146.148.105.98:8000/api/orders'; // URL to web API
  private urlordersbyuser = 'http://146.148.105.98:8000/api/ordersbyuser'; // URL to web API
  constructor(private http: Http) {}

  getOrders(): Observable < Array < Order >> {

    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  findById(orderId:Number):Observable<Array<Order>>{

    let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions();
     options.headers = headers;
     options.search = new URLSearchParams();
     options.search.append('id', orderId.toString());
    
    
     return this.http.get(this.url+"/"+orderId.toString() ,options)
                     .map(this.extractData)
                     .catch(this.handleError);

     
  }
  getOrdersByUser(user:User):Observable<Array<Order>>{

    let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions();
     options.headers = headers;
     options.search = new URLSearchParams();
     options.search.append('userid', user._id.toString());
    
    
     return this.http.get(this.urlordersbyuser+"/"+user._id.toString() ,options)
                     .map(this.extractData)
                     .catch(this.handleError);

     
  }
  addOrder(order: Order): Observable < Array < Order >> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });


    return this.http.post(this.url, order, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  updateOrder(order: Order): Observable < Array < Order >> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions();
    options.headers = headers;
    
  
    return this.http.put(this.url+"/"+order._id.toString(), order ,options)
      .map(this.extractData)
      .catch(this.handleError);

    return this.http.post(this.url, order, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {

    let data = res.json();

    return data.orders || {};
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

