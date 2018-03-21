import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  URLSearchParams
} from '@angular/http';
import { debug } from 'util';
import { TransferSize } from './transferSize';
@Injectable()
export class TransferSizeService {
    transferSize:Array<TransferSize>;
    
     private url = 'http://146.148.105.98:8000/api/transferSize';  // URL to web API

constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<TransferSize>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  update(transferSize:TransferSize): Observable<Array<TransferSize>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+transferSize._id.toString(), transferSize ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }
 delete(transferSize:TransferSize): Observable<Array<TransferSize>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', transferSize._id.toString());


 return this.http.delete(this.url+"/"+transferSize._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
}
  addTecnica(transferSize:TransferSize): Observable<Array<TransferSize>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,transferSize,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.transferSize || { };
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