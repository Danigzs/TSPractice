import { Component, OnInit, ElementRef} from '@angular/core';
import { DashboardService } from "./dashboard/dashboard.service";
import { Order } from "./orders/order";

@Component({
  selector: 'my-app',
  providers: [DashboardService],
  styleUrls: ["app/dashboard.css"],
  templateUrl: "app/dashboard.html"
})
export class AppComponent implements OnInit {
  public orders:Array<Order>;


  constructor(private _dashboardService:DashboardService){

  }
  ngOnInit() {

    this._dashboardService.getOrders().subscribe(
      data=>{
        this.orders = data;
      }
    )

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}