import { Component, OnInit, ElementRef} from '@angular/core';
import { OrderService } from "./order.service";
import { Order } from "./order";
import {
  Observable
} from 'rxjs/Observable';
import { Route } from '@angular/router/src/config';
import { NavigationExtras,Routes,RouterModule, Router} from '@angular/router';
import { Stream } from 'stream';
import { IMultiSelectOption,IMultiSelectTexts ,IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import { debug } from 'util';
import { User } from '../register/user';
import { UserService } from '../security/user.service';
import { AreaService } from '../areas/area.service';
import { Area } from '../areas/area';

@Component({
  selector: 'orders',
  providers: [OrderService],
  styleUrls: ["app/orders/orders.css", "app/styles/table.css"],
  templateUrl: "app/orders/orders.html"
})
export class OrdersComponent implements OnInit {
  public orders:Array<Order>;
  public allOrders:Array<Order>;
  public order: Order;
  public esAdmin:Boolean;
  public users: Array < User> ;
  public user: User;
  public clientname:string = "";
  public clientfolio:string = "";
  public isEditing:Boolean;
  colorOptions: any[];
  areaOptions: any[];
  public areas:Array <Area>; 
  public orderStatus:Array<String>;
  userSelected = new User;
  statusSelected = new String();
  userDropdownSettings: IMultiSelectSettings;
  selectedStatus:any;
  selectedArea:any;
  multiConfig: IMultiSelectTexts = {
    checkAll: 'Seleccionar todos',
    uncheckAll: 'Deseleccionar todos',
    checked: 'color seleccionado',
    checkedPlural: 'colores seleccionados',
    searchPlaceholder: 'Buscar',
    searchEmptyResult: 'Vacío...',
    defaultTitle: 'Status',
    allSelected: 'Todos seleccionados',
  };
  // Settings configuration
mySettings: IMultiSelectSettings = {
  selectionLimit: 1,
  autoUnselect: true,
  checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
  maxHeight: '300px'

};
  constructor(private _orderService:OrderService, private router:Router, private _userService:UserService,private _areasService:AreaService ){
 
  }
  ngOnInit() {
    this.esAdmin = this._userService.isUserAdmin();
    this.colorOptions = [
      { id: 0, name: 'Pendiente de Pago'},
      { id: 1, name: 'En proceso'},
      { id: 2, name: 'Pagada' },
      { id: 3, name: 'Entregada'},
      { id: 4, name: 'Cancelada'}];
   
      

    var user = window.localStorage.getItem("user");
    if(user){
      this.user = JSON.parse(user);
    }
    else{
      this.user = new User();
    }
     

    this._areasService.getAreas().subscribe(
      data=>{
        this.areas = data;
        this.selectedArea = this.areas[0];
        this.selectedStatus = this.colorOptions[0];

      }
    )

  
    this.getOrderType.bind(this);
    this.onChangeOrderStatus.bind(this);

    if(this._userService.isUserAdmin()){
    this._orderService.getOrders().subscribe(
      data=>{
        this.allOrders = data;

        this.orders = data;
        this.orders.map((order,index) => ( 
          order.currentStatus = [order.status]
        ));
      }
    
    
    )

    this._userService.getSellerUsers().subscribe(
      results => {
        this.users = results;
        if(this.users.length > 0)
        this.userSelected = this.users[0];
      })
  }
  else {
      this._orderService.getOrdersByUser(this.user).subscribe(
        data=>{
          this.allOrders = data;
          this.orders = data;
          this.orders.map((order,index) => ( 
            order.currentStatus = [order.status]
          ));
        }
      )
    }
  }
  onChangeOrderStatus(event:Event,order:Order){
    console.log(order.currentStatus)
    order.status = +order.currentStatus[0];
    this._orderService.updateOrder(order).subscribe(
      data=>{

      }
    );
  }
  onFilterClientChanged(){
    if(this.clientname == "")
    {
      this.orders = this.allOrders;
    }
     
    var name = this.clientname;
    this.orders = this.allOrders.filter((order,index) => {
      return order.client.businessName.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1 ;
    });
  }
  onFilterFolioChanged(){
    if(this.clientfolio == "")
    {
      this.orders = this.allOrders;
    }
     
    this.orders = this.allOrders.filter((order,index) => {
      return order.folio.toString() == this.clientfolio;
    });
  }
  onFilterStatusChanged(){
    this.orders = this.allOrders.filter((order,index) => {
      return order.status == this.selectedStatus.id;
    });
  }
  onFilterAreaChanged(){
    this.orders = this.allOrders.filter((order,index) => {
      return order.area == this.selectedArea._id;
    });
  }
  onFilterUserChanged(){
    this.orders = this.allOrders.filter((order,index) => {
      return order.user._id == this.userSelected._id;
    });
  }
  getOrderStatusText(order:Order){
    var statusText= "";
    
    if(order.status == 5)
    {
      return "Cancelada";
    }
    if(order.status == 4){
      return "Entregada";
    }
    if(order.status == 3){
      return "Pendiente de Entrega";
    }

    if(order.esCotizacion){
      return "Cotización"
    }

    if(order.debt == 0){
      return "Pagada";
    }
    if(order.debt > 0 ){
      return "Pendiente de Pago";
    }
    
    
  }
  getOrderType(order:Order){
    if (order.esCotizacion){
      return "Cotización"
    }
    return "Pedido"
  }

setEditMode(edit:boolean,orden:Order){
  this.isEditing = edit;
  if(edit){
   /* this.order._id = orden._id;
    this.order.seller = orden.seller;
    this.order.client = orden.client;
    this.order.products = orden.products;
    this.order.maquilas = orden.maquilas;
    this.order.tecnicaBordados = orden.tecnicaBordados;
    this.order.graficos = orden.graficos;
    this.order.total = orden.total;*/
    var tmpOrder = orden;
   /* const appRoute: Routes = [
      { path: 'cotizador-edit', component: CotizadorEditComponent }
    ];
*/
    this.router.navigate(['/cotizador-edit',{id:tmpOrder._id}]);
  }

}
}