import { Component } from '@angular/core';
import {CotizadorComponent} from './../cotizador.component'
import {Producto} from './../producto/producto'
import {ProductoService} from './../producto/producto.service'

 
@Component({
  selector: 'navbar',
   styleUrls: ["./app/navbar/navbar.css"],
  templateUrl: "./app/navbar/navbar.html"
  ,
providers:[CotizadorComponent, ProductoService, Producto]
})
export class NavbarComponent  {

  
}