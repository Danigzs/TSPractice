
import { Component, OnInit, ElementRef} from '@angular/core';
import { DashboardService } from "./dashboard/dashboard.service";
import { Order } from "./orders/order";

@Component({
  selector: 'dashboard',
  providers: [DashboardService],
  styleUrls: ["app/dashboard.css", "app/styles/table.css"],
  templateUrl: "app/home.component.html"
})
export class HomeComponent implements OnInit {
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