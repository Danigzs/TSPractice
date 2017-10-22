import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SerigrafiaPrecioCliente } from './serigrafiaPrecioCliente';
@Injectable()
export class SerigrafiaPrecioClienteService {
  serigrafiapreciocliente:Array<SerigrafiaPrecioCliente>;

  private url = 'http://localhost:8000/api/serigrafiaPrecioCliente ';  // URL to web API
  private getInkQuantityUrlWItem   = 'http://localhost:8000/api/findByInkQuantityWItem';  // URL to web API
  constructor (private http: Http) {}

  getTecnicas(): Observable<Array<SerigrafiaPrecioCliente>> {

    return this.http.get(this.url)
    .map(this.extractData)
    .catch(this.handleError);
  }
  getInkQuantityWItem(tintas:number, prendas:number): Observable<Array<SerigrafiaPrecioCliente>> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    let options = new RequestOptions();
    options.headers = headers;
    options.search = new URLSearchParams();
    options.search.append('tintas', tintas.toString());
    options.search.append('prendas', prendas.toString());
    return this.http.get(this.getInkQuantityUrlWItem,options)
    .map(this.extractData)
    .catch(this.handleError);
  }
  addTecnica(serigrafiaPrecioCliente:SerigrafiaPrecioCliente): Observable<Array<SerigrafiaPrecioCliente>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.url,serigrafiaPrecioCliente,options)
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {

    let data = res.json();
    
    return data.serigrafiaPrecioCliente || { };
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