import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SublimadoPrecioMaquila } from './sublimadoPrecioMaquila';
@Injectable()
export class SublimadoPrecioMaquilaService {
    sublimadoPrecioMaquila:Array<SublimadoPrecioMaquila>;
    
     private url = 'http://localhost:8000/api/sublimadoPrecioMaquila ';  // URL to web API
     private sublimadoPrecioMaquilaUrl = 'http://localhost:8000/api/findBySublimadoPrecioMaquila'
constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<SublimadoPrecioMaquila>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getSublimadoPrecioMaquila(quantity:number): Observable<Array<SublimadoPrecioMaquila>> {
     let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    let options = new RequestOptions();
    options.headers = headers;
    options.search = new URLSearchParams();
    options.search.append('quantity', quantity.toString());

    return this.http.get(this.sublimadoPrecioMaquilaUrl,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addTecnica(sublimadoPrecioMaquila:SublimadoPrecioMaquila): Observable<Array<SublimadoPrecioMaquila>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,sublimadoPrecioMaquila,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.sublimadoPrecioMaquila || { };
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