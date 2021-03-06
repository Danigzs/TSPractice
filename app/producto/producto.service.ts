 
    // producto1.setProducto("celular",2000,"Telefono celular",1,[]);
    // producto2.setProducto("Television",9000,"Television Full HD",1,[]);
    // producto3.setProducto("Laptop",13000,"Computadora portatil",1,[]);

    
 

import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Producto } from './producto';
import {URLSearchParams} from '@angular/http';
@Injectable()
export class ProductoService {
    tecnicas:Array<Producto>;
    
     private url = 'http://146.148.105.98:8000/api/products';  // URL to web API

constructor (private http: Http) {}
 
  getProducts(): Observable<Array<Producto>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addProduct(product:Producto): Observable<Array<Producto>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,product,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  update(product:Producto): Observable<Array<Producto>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+product._id.toString(), product ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

  delete(producto:Producto): Observable<Array<Producto>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
  debugger
    let options = new RequestOptions();
   options.headers = headers;
   options.search = new URLSearchParams(); 
   console.log(Producto)  
   options.search.append('id', producto._id.toString());
  debugger
  
   return this.http.delete(this.url+"/"+producto._id.toString() ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.products || { };
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