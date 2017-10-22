import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SerigrafiaPrecioBordesa } from './serigrafiaPrecioBordesa';
@Injectable()
export class SerigrafiaPrecioBordesaService {
    serigrafiaPrecioBordesa:Array<SerigrafiaPrecioBordesa>;
    
     private url = 'http://localhost:8000/api/SerigrafiaPrecioBordesa';  // URL to web API
    private getInkQuantityUrl = 'http://localhost:8000/api/findByInkQuantity';  // URL to web API
constructor (private http: Http) {}
 
  getInkQuantity(tintas:number, prendas:number): Observable<Array<SerigrafiaPrecioBordesa>> {
     

     let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    let options = new RequestOptions();
    options.headers = headers;
    options.search = new URLSearchParams();
    options.search.append('tintas', tintas.toString());
    options.search.append('prendas', prendas.toString());
    return this.http.get(this.getInkQuantityUrl,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getTecnicas(): Observable<Array<SerigrafiaPrecioBordesa>> {
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addTecnica(serigrafiaPrecioBordesa:SerigrafiaPrecioBordesa): Observable<Array<SerigrafiaPrecioBordesa>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,serigrafiaPrecioBordesa,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.serigrafiaPrecioBordesa || { };
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