import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {URLSearchParams} from '@angular/http';
import { Area } from './area';
@Injectable()
export class AreaService {
 private clientsUrl = 'http://localhost:8000/api/area';  // URL to web API

constructor (private http: Http) {}

  getAreas(): Observable<Array<Area>> {
    
    return this.http.get(this.clientsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addClient(area:Area): Observable<Array<Area>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.clientsUrl,area,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  update(area:Area): Observable<Array<Area>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.clientsUrl+"/"+area._id.toString(), area ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

 
 delete(area:Area): Observable<Array<Area>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', area._id.toString());


 return this.http.delete(this.clientsUrl+"/"+area._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
}
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.area || { };
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
  
   