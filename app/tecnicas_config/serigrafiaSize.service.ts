import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SerigrafiaSize } from './serigrafiaSize';
import {
  URLSearchParams
} from '@angular/http';
@Injectable()
export class SerigrafiaSizeService {
    serigrafiaSize:Array<SerigrafiaSize>;
    
     private url = 'http://146.148.105.98:8000/api/serigrafiaSize';  // URL to web API

constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<SerigrafiaSize>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  update(serigrafiaSize:SerigrafiaSize): Observable<Array<SerigrafiaSize>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+serigrafiaSize._id.toString(), serigrafiaSize ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }
 delete(serigrafiaSize:SerigrafiaSize): Observable<Array<SerigrafiaSize>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', serigrafiaSize._id.toString());


 return this.http.delete(this.url+"/"+serigrafiaSize._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
}

  addTecnica(serigrafiaSize:SerigrafiaSize): Observable<Array<SerigrafiaSize>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,serigrafiaSize,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.serigrafiaSize || { };
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