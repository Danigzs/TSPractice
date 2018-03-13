import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Headers,
  RequestOptions
} from '@angular/http';
import {
  URLSearchParams
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  User
} from './user';
@Injectable()
export class RegisterService {


  private url = 'http://localhost:8000/api/login'; // URL to web API
   private urlUsers = 'http://localhost:8000/api/users'; // URL to web API
  private urlRegister = 'http://localhost:8000/api/register'; // URL to web API
  constructor(private http: Http) {}

  getUsers(): Observable < Array<User> > {
    return this.http.get(this.urlUsers)
      .map(this.extractUsersData)
      .catch(this.handleError);
  }
  
  private extractUsersData(res: Response) {

    let data = res.json();

    return data.users || {};
  }
  register(user: User): Observable < User > {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.urlRegister, user, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  removeUser(user: User): Observable < User > {
    let headers = new Headers({ 'Content-Type': 'application/json' });
 
  let options = new RequestOptions();
 options.headers = headers;
 options.search = new URLSearchParams();
 options.search.append('id', user._id.toString());


 return this.http.delete(this.urlUsers+"/"+user._id.toString() ,options)
                 .map(this.extractData)
                 .catch(this.handleError);
  }

  login(user: User): Observable < User > {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

   let myParams = new URLSearchParams();
    myParams.append('id', user.username.toString());
    let options = new RequestOptions();
    options.headers = headers;
    options.search = new URLSearchParams();
    options.search.append('username', user.username.toString());
    options.search.append('password', user.password.toString());
     
    return this.http.post(this.url, user, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {

    let data = res.json();

    return data.user || {};
  }
  private handleError(error: Response | any) {
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
