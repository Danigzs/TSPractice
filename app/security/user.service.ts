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
    Observable
  } from 'rxjs/Observable';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/map';
import { User } from '../register/user';
  
  @Injectable()
  export class UserService {
  
    isUserAdmin():Boolean{
      var user = localStorage.getItem("user");
      let tmpUser:User= JSON.parse(user);
      if( tmpUser.role.name == "Admin" || tmpUser.role.name == "admin" || tmpUser.role.name == "administrador"|| tmpUser.role.name == "Administrador" ){
          return true;
      }
      return false;
    }
    getUser():User{
      var user = localStorage.getItem("user");
      let tmpUser:User= JSON.parse(user);
      return tmpUser;
    }

    
  private url = 'http://146.148.105.98:8000/api/sellerUsers'; // URL to web API
  // private url = 'http://146.148.105.98:8000/api/sellerUsers'; // URL to web API
  constructor(private http: Http) {}


  getSellerUsers(): Observable<Array<User>> {
    
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {

    let data = res.json();

    return data.users || {};
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