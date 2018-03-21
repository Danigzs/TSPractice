import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  URLSearchParams
} from '@angular/http';
import { Ubicaciones } from './ubicaciones';
@Injectable()
export class UbicacionesService {
    ubicaciones:Array<Ubicaciones>;
    
     private url = 'http://146.148.105.98:8000/api/ubicaciones';  // URL to web API

constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<Ubicaciones>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  update(ubicaciones:Ubicaciones): Observable<Array<Ubicaciones>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+ubicaciones._id.toString(), ubicaciones ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }
 delete(ubicaciones:Ubicaciones): Observable<Array<Ubicaciones>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', ubicaciones._id.toString());


 return this.http.delete(this.url+"/"+ubicaciones._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
}
  addTecnica(ubicaciones:Ubicaciones): Observable<Array<Ubicaciones>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,ubicaciones,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.ubicaciones || { };
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