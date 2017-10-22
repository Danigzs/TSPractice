import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { VinilPrecioMaquila } from './vinilPrecioMaquila';
@Injectable()
export class VinilPrecioMaquilaService {
    vinilPrecioMaquila:Array<VinilPrecioMaquila>;
    
     private url = 'http://localhost:8000/api/vinilPrecioMaquila ';  // URL to web API

constructor (private http: Http) {}
 
  getTecnicas(): Observable<Array<VinilPrecioMaquila>> {
    
    return this.http.get(this.url)
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