import { Component, OnInit, ElementRef} from '@angular/core';
import { OrderService } from "./order.service";
import { Order } from "./order";
import {
  Observable
} from 'rxjs/Observable';
import {CotizadorEditComponent} from "./../cotizador..component.edit"
import { Route } from '@angular/router/src/config';
import { NavigationExtras,Routes,RouterModule, Router} from '@angular/router';
import { Stream } from 'stream';
import { IMultiSelectOption,IMultiSelectTexts ,IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import { debug } from 'util';

@Component({
  selector: 'orders',
  providers: [OrderService],
  styleUrls: ["app/orders/orders.css", "app/styles/table.css"],
  templateUrl: "app/orders/orders.html"
})
export class OrdersComponent implements OnInit {
  public orders:Array<Order>;
  public order: Order;
  public clientname:String = "";
  public clientfolio:String = "";
  public isEditing:Boolean;

  public orderStatus:Array<String>;
  statusSelected = new String();
  userDropdownSettings: IMultiSelectSettings;

  colorOptions: any[];
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
  constructor(private _orderService:OrderService, private router:Router ){
 
  }
  ngOnInit() {
    
    
    this.colorOptions = [
      { id: 2, name: 'Pendiente de Pago'},
      { id: 3, name: 'Pagada' },
      { id: 4, name: 'Entregada'},
      { id: 5, name: 'Cancelada'}];
  
    this.getOrderType.bind(this);
    this.onChangeOrderStatus.bind(this);
    this._orderService.getOrders().subscribe(
      data=>{
        this.orders = data;
        this.orders.map((order,index) => ( 
          order.currentStatus = [order.status]
        ));
      }
    )
  }
  onChangeOrderStatus(event:Event,order:Order){
    console.log(order.currentStatus)
    order.status = +order.currentStatus[0];
    this._orderService.updateOrder(order).subscribe(
      data=>{

      }
    );
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