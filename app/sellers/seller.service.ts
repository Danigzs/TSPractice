import {
  Injectable
} from '@angular/core';
import {
  URLSearchParams
} from '@angular/http';
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
  Seller
} from './seller';
import {
  RequestMessage
} from './../httpMessages/requestMessage';
@Injectable()
export class SellerService {
  tecnicas: Array < Seller > ;

  private url = 'http://146.148.105.98:8000/api/sellers'; // URL to web API
  private updateUrl = 'http://146.148.105.98:8000/api/sellers/'; // URL to web API
  constructor(private http: Http) {}

  getSellers(): Observable < Array < Seller >> {

    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  updateSeller(seller: Seller): Observable < RequestMessage > {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions();
    options.headers = headers;
    
  
    return this.http.put(this.updateUrl+seller._id.toString(), seller ,options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  addSeller(seller: Seller): Observable < Array < Seller >> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });


    return this.http.post(this.url, seller, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {

    let data = res.json();

    return data.sellers || {};
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
