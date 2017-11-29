import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { VinilPrecio } from './vinilPrecio';
@Injectable()
export class VinilPrecioService {
    vinilPrecio:Array<VinilPrecio>;
    
     private url = 'http://localhost:8000/api/vinilPrecio ';  // URL to web API
     private vinilPrecioUrl = 'http://localhost:8000/api/findByVinilPrecio'
     
constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<VinilPrecio>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getVinilPrecio(quantity:number): Observable<Array<VinilPrecio>> {
    let headers = new Headers({
     'Content-Type': 'application/json'
   });
   
   let options = new RequestOptions();
   options.headers = headers;
   options.search = new URLSearchParams();
   options.search.append('quantity', quantity.toString());
   return this.http.get(this.vinilPrecioUrl,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

  addTecnica(vinilPrecio:VinilPrecio): Observable<Array<VinilPrecio>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,vinilPrecio,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.vinilPrecio || { };
  }
    private handleError (error: Response | any) {
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