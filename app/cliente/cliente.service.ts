import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {URLSearchParams} from '@angular/http';
import { Cliente } from './cliente';
@Injectable()
export class ClienteService {
 private clientsUrl = 'http://146.148.105.98:8000/api/clients';  // URL to web API

constructor (private http: Http) {}

  getClients(): Observable<Array<Cliente>> {
    
    return this.http.get(this.clientsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addClient(client:Cliente): Observable<Array<Cliente>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.clientsUrl,client,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  update(client:Cliente): Observable<Array<Cliente>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.clientsUrl+"/"+client._id.toString(), client ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

 
 delete(client:Cliente): Observable<Array<Cliente>> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
debugger
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', client._id.toString());


 return this.http.delete(this.clientsUrl+"/"+client._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
}
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.clients || { };
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
  
   