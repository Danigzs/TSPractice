 
import { Router, ActivatedRoute } from '@angular/router';

import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  RegisterService
} from "./../register/register.service"
import {
  User
} from "./../register/user"


@Component({
  selector: 'login',
  providers: [RegisterService],
  styleUrls: ["./app/login/login.css"],
  templateUrl: "./app/login/login.html"

})
export class LoginComponent implements OnInit {
  user = new User()
  public username:String
  public password:String
      returnUrl: string;

  constructor(private _registerService:RegisterService,private route: ActivatedRoute,
        private router: Router,){

  }
  
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 
  }

  login(){
    this.user.username = this.username;
    this.user.password = this.password;
    this._registerService.login(this.user).subscribe(
      data => {
        if(data && data.username)
        {
          alert("Inicio de sesión correcto");
          window.localStorage.setItem("user",JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
        }
        else{
          alert("Usuario o contraseña incorrecto");
        }
      }
    )
  }
}
