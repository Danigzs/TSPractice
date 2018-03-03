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
  
  @Injectable()
  export class UserService {
  
    isUserAdmin():Boolean{
      var user = localStorage.getItem("user");
      user = JSON.parse(user);
      if( user.role._id != 1 ){
          return false;
      }
      return true;
    }
}