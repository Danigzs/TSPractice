
import { Component, OnInit, ElementRef} from '@angular/core';
import { DashboardService } from "./dashboard/dashboard.service";
import { Order } from "./orders/order";
import { Route } from '@angular/router/src/config';
import { NavigationExtras,Routes,RouterModule, Router} from '@angular/router';
import { User } from './register/user';
@Component({
  selector: 'dashboard',
  providers: [DashboardService],
  styleUrls: ["app/dashboard.css", "app/styles/table.css"],
  templateUrl: "app/home.component.html"
})
export class HomeComponent implements OnInit {
  public orders:Array<Order>;
  public user:User;

  constructor(private _dashboardService:DashboardService, private router:Router ){

  }
  ngOnInit() {
    var user = window.localStorage.getItem("user");
    if(user){
      this.user = JSON.parse(user);
    }
    else{
      this.user = new User();
    }
    this._dashboardService.getOrders(this.user).subscribe(
      data=>{
        this.orders = data;
      }
    )

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }


setEditMode(orden:Order){
    this.router.navigate(['/cotizador-edit',{id:orden._id}]);
}
}