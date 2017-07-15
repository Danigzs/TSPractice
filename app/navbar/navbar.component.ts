import { Component,OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CotizadorComponent} from './../cotizador.component'
import {Producto} from './../producto/producto'
import {ProductoService} from './../producto/producto.service'
import {User} from "./../register/user"
 
@Component({
  selector: 'navbar',
   styleUrls: ["./app/navbar/navbar.css"],
  templateUrl: "./app/navbar/navbar.html"
  ,
providers:[CotizadorComponent, ProductoService, Producto]
})
export class NavbarComponent implements OnInit  {
  @Input() isLogin:boolean = false;
username:String
public user:User

ngOnInit() {
  var user = window.localStorage.getItem("user");
  if(user){
    this.user = JSON.parse(user);
  }
  else{
    this.user = new User();
  }
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
constructor(private route: ActivatedRoute,
        private router: Router){

  }

logout(){
  window.localStorage.clear();
        this.router.navigate(['login']);
}
}