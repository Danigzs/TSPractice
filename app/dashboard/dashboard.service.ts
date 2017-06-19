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
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  Order
} from './../orders/order';
@Injectable()
export class DashboardService {
  orders: Array < Order > ;
  private url = 'http://localhost:8000/api/home'; // URL to web API
  constructor(private http: Http) {}

  getOrders(): Observable < Array < Order >> {

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

