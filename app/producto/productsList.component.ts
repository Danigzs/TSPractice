import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  ViewContainerRef
} from '@angular/core';
import {ProductoService} from './producto.service';
import {Producto} from './producto';
import {UserService} from './../security/user.service'



@Component({
  selector: 'products-list',
    providers: [ProductoService],
  styleUrls: ["./app/producto/products-list.css",'app/styles/table.css'],
  templateUrl: "./app/producto/products-list.html"
})

export class ProductsListComponent  implements OnInit{
  products: Array < Producto > = [] ;
  providerProducts: Array < Producto > = [] ;
  bordesaProducts: Array < Producto > = [] ;
  isUserAdmin:Boolean
  constructor(private  _productService: ProductoService,private  _userService:UserService) {

  }

  ngOnInit() {
    this.isUserAdmin = false;
    this.isUserAdmin = this._userService.isUserAdmin();
   this._productService.getProducts().subscribe(
     data => 
     {
       
       this.products = data;
       this.providerProducts = data.filter(function(x){return x.isProvider == 1});
       this.bordesaProducts =  data.filter(function(x){return x.isBordesa == 1 });
     }
   )
  }

  delete(_producto:Producto, index:number){
    this._productService.delete(_producto).subscribe(
      data => {
        this.ngOnInit();
      }
    );
    
  }
  
}