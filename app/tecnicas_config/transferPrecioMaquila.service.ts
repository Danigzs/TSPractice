import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { TransferPrecioMaquila } from './transferPrecioMaquila';
@Injectable()
export class TransferPrecioMaquilaService {
  transferPrecioMaquila:Array<TransferPrecioMaquila>;

  private url = 'http://146.148.105.98:8000/api/transferPrecioMaquila';  // URL to web API
  private transferPrecioMaquilaUrl = 'http://146.148.105.98:8000/api/findByTransferPrecioMaquila'
  constructor (private http: Http) {}

  getTecnicas(): Observable<Array<TransferPrecioMaquila>> {

    return this.http.get(this.url)
    .map(this.extractData)
    .catch(this.handleError);
  }
  update(transferPrecioMaquila:TransferPrecioMaquila): Observable<Array<TransferPrecioMaquila>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+transferPrecioMaquila._id.toString(), transferPrecioMaquila ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }
 delete(transferPrecioMaquila:TransferPrecioMaquila): Observable<Array<TransferPrecioMaquila>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', transferPrecioMaquila._id.toString());


 return this.http.delete(this.url+"/"+transferPrecioMaquila._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
} 
  getTransferPrecioMaquila(quantity:number): Observable<Array<TransferPrecioMaquila>> {
    let headers = new Headers({
     'Content-Type': 'application/json'
   });
   
   let options = new RequestOptions();
   options.headers = headers;
   options.search = new URLSearchParams();
   options.search.append('quantity', quantity.toString());

   return this.http.get(this.transferPrecioMaquilaUrl,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }
  addTecnica(transferPrecioMaquila:TransferPrecioMaquila): Observable<Array<TransferPrecioMaquila>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.url,transferPrecioMaquila,options)
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {

    let data = res.json();
    
    return data.transferPrecioMaquila || { };
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