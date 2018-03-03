import {Component,OnInit,ElementRef,ViewChild,ViewContainerRef} from '@angular/core';

import {Producto} from './../producto/producto';
import {ProductoService} from './../producto/producto.service';
import { UserService } from '../security/user.service';

@Component({
  selector: 'nuevoproducto',
    styleUrls: ["app/nuevoproducto/nuevoproducto.css", "app/styles/table.css"],
  templateUrl: "app/nuevoproducto/nuevoproducto.html"
       
})
export class NuevoProductoComponent  implements OnInit{
  
 public clienteSelected = {};
 
 public producto:Producto;
 isUserAdmin:Boolean;


constructor (private _productService:ProductoService, private _userService:UserService){}
updatePrice(){
      this.producto.pCantidadDD = this.producto.price + this.producto.price * .25      
      this.producto.pCantidadTC = this.producto.price + this.producto.price * .21      
      this.producto.pCantidadCC = this.producto.price + this.producto.price * .17
      this.producto.pCantidadMC = this.producto.price + this.producto.price * .13      
      this.producto.CantidadDDiva = this.producto.pCantidadDD + this.producto.pCantidadDD*.16
      this.producto.CantidadTCiva = this.producto.pCantidadTC + this.producto.pCantidadTC*.16
      this.producto.CantidadCCiva = this.producto.pCantidadCC + this.producto.pCantidadCC*.16
      this.producto.CantidadMCiva = this.producto.pCantidadMC + this.producto.pCantidadMC*.16

}
Calcular(producto:Producto)
{
}
agregarProducto(){
  if(this.producto.isProvider == 1){
    this.producto.supplies = "";
    this.producto.isProvider = 1
    this.producto.isBordesa = 0
    
    this._productService.addProduct(this.producto).subscribe(
    data => {

    }
  )
}else{
    this.producto.isBordesa = 1
    this.producto.isProvider= 0
    this._productService.addProduct(this.producto).subscribe(
    data => {

    }
  )
  }
  
}

ngOnInit() {
  this.producto = new Producto();  
  this.producto.isProvider = 1;
  this.producto.isBordesa = 0;
  this.producto.stock = 1;
  this.isUserAdmin = this._userService.isUserAdmin();
}

onProviderChange(){
  // if(this.producto.isProvider){
  //   this.producto.isProvider = 0;
  //   this.producto.isBordesa = 1
  // }
  // else{
  //   this.producto.isProvider = 1;
  //   this.producto.isBordesa = 0
  // }
  this.producto.isBordesa = this.producto.isProvider == 1 ? 0 : 1;
  
  
}

onBordesaChange(){
  this.producto.isProvider = this.producto.isBordesa == 1 ? 0 : 1;
}
}