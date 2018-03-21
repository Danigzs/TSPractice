import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { VinilPrecioMaquila } from './vinilPrecioMaquila';
@Injectable()
export class VinilPrecioMaquilaService {
    vinilPrecioMaquila:Array<VinilPrecioMaquila>;
    
     private url = 'http://146.148.105.98:8000/api/vinilPrecioMaquila';  // URL to web API
     private vinilPrecioMaquilaUrl = 'http://146.148.105.98:8000/api/findByVinilPrecioMaquila'
     
     
constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<VinilPrecioMaquila>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  update(vinilPrecioMaquila:VinilPrecioMaquila): Observable<Array<VinilPrecioMaquila>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+vinilPrecioMaquila._id.toString(), vinilPrecioMaquila ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }
 delete(vinilPrecioMaquila:VinilPrecioMaquila): Observable<Array<VinilPrecioMaquila>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', vinilPrecioMaquila._id.toString());


 return this.http.delete(this.url+"/"+vinilPrecioMaquila._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
}


  getVinilPrecioMaquila(quantity:number): Observable<Array<VinilPrecioMaquila>> {
    let headers = new Headers({
     'Content-Type': 'application/json'
   });
   
   let options = new RequestOptions();
   options.headers = headers;
   options.search = new URLSearchParams();
   options.search.append('quantity', quantity.toString());
   return this.http.get(this.vinilPrecioMaquilaUrl,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

  addTecnica(vinilPrecioMaquila:VinilPrecioMaquila): Observable<Array<VinilPrecioMaquila>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,vinilPrecioMaquila,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.vinilPrecioMaquila || { };
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