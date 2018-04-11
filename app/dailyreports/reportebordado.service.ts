import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {URLSearchParams} from '@angular/http';
import { ReporteBordado } from './reportebordado';

@Injectable()
export class ReporteBordadoService {
 private url = 'http://146.148.105.98:8000/api/reportesbordado';  // URL to web API

constructor (private http: Http) {}

  getReportesBordado(): Observable<Array<ReporteBordado>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addReporteBordado(reportebordado:ReporteBordado): Observable<Array<ReporteBordado>> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
    return this.http.post(this.url,reportebordado,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  update(reportebordado:ReporteBordado): Observable<Array<ReporteBordado>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   
  
   return this.http.put(this.url+"/"+reportebordado._id.toString(), reportebordado ,options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

 
//  delete(client:Repor): Observable<Array<Cliente>> {
//   let headers = new Headers({ 'Content-Type': 'application/json' });
// debugger
//   let options = new RequestOptions();
//  options.headers = headers;
//  options.search = new URLSearchParams();
//  options.search.append('id', client._id.toString());


//  return this.http.delete(this.clientsUrl+"/"+client._id.toString() ,options)
//                  .map(this.extractData)
//                  .catch(this.handleError);
// }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.reportes || { };
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
  
   