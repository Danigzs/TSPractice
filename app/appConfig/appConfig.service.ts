import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppConfig } from './appConfig';
@Injectable()
export class AppConfigService {
 private appConfigUrl = 'http://146.148.105.98:8000/api/appConfig';  // URL to web API

constructor (private http: Http) {}

  getAppConfig(): Observable<AppConfig> {
    
    return this.http.get(this.appConfigUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  updateAppConfig(appConfig:AppConfig): Observable<AppConfig> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.appConfigUrl + "/" + appConfig._id.toString(), appConfig, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    
    let data = res.json();
    
    return data.appConfig || { };
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
  
   