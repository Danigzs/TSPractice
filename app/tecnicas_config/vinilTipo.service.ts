import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { VinilTipo } from './vinilTipo';
import {
  URLSearchParams
} from '@angular/http';
import { debug } from 'util';
@Injectable()
export class VinilTipoService {
    vinilTipo:Array<VinilTipo>;
    
     private url = 'http://localhost:8000/api/vinilTipo';  // URL to web API

constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<VinilTipo>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  update(vinilTipo:VinilTipo): Observable<Array<VinilTipo>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+vinilTipo._id.toString(), vinilTipo ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }
 delete(vinilTipo:VinilTipo): Observable<Array<VinilTipo>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', vinilTipo._id.toString());


 return this.http.delete(this.url+"/"+vinilTipo._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
}

  addTecnica(vinilTipo:VinilTipo): Observable<Array<VinilTipo>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,vinilTipo,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.vinilTipo || { };
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