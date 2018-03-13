import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Headers,
  RequestOptions
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
import {
  URLSearchParams
} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  Order
} from './../orders/order';
import { User } from '../register/user';
@Injectable()
export class DashboardService {
  orders: Array < Order > ;
  private url = 'http://localhost:8000/api/home'; // URL to web API
  constructor(private http: Http) {}

  getOrders(user:User): Observable < Array < Order >> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions();
     options.headers = headers;
     options.search = new URLSearchParams();
     options.search.append('userid', user._id.toString());
    
    
     return this.http.get(this.url+"/"+user._id.toString() ,options)
                     .map(this.extractData)
                     .catch(this.handleError);

    return this.http.get(this.url)
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

