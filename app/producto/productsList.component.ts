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



@Component({
  selector: 'products-list',
    providers: [ProductoService],
  styleUrls: ["./app/producto/products-list.css"],
  templateUrl: "./app/producto/products-list.html"
})

export class ProductsListComponent  implements OnInit{
  products: Array < Producto > = [] ;
   
  constructor(private  _productService: ProductoService) {

  }

  ngOnInit() {
   this._productService.getProducts().subscribe(
     data => 
     {
      
       this.products = data;
     }
   )
  }
  
}