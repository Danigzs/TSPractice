import { Component } from '@angular/core';
import {CotizadorComponent} from './../cotizador.component'
import {Producto} from './../producto/producto'
import {ProductoService} from './../producto/producto.service'
 
@Component({
  selector: 'navbar',
  template: `
 
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      
      <a class="navbar-brand" routerLink="/my-app">WebSiteName</a>
    </div>

    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-folder-close"> Cotizaciones </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a routerLink="/cotizador">Nueva</a></li>
            <li role="presentation" class="divider"></li>
            <li><a routerLink="/form-directive">Ver Cotizaciones</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-folder-open"> Inventario </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a routerLink="/nuevoproducto">Nuevo Producto</a></li>
            <li role="presentation" class="divider"></li>
            <li><a routerLink="/inventario">Ver inventario</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Modificar</a></li>
          </ul>
        </li>

        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"> Clientes </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a routerLink="/clientes">Agregar cliente</a></li>
            <li role="presentation" class="divider"></li>
            <li><a routerLink="/clientes">Listado de clientes</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>


        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-book"> Configuración </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="http://www.w3schools.com/css/css_navbar.asp">Page 1-1</a></li>
            <li role="presentation" class="divider"></li>
            <li><a routerLink="/tecnicas">Técnicas</a></li>
            <li role="presentation" class="divider"></li>
            <li><a routerLink="/categorias">Categorías</a></li>
            <li role="presentation" class="divider"></li>
            <li><a routerLink="/sellers">Vendedores</a></li>
          </ul>
        </li>
      </ul>     
    </div>
  </div>
</nav>
					<!--
					MODALS
					MODALS
					MODALS
					MODALS
					MODALS
					-->

					<!--

					MODAL 2

					-->
  
<div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content"> 
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Agregar Producto</h4>
          
			</div>
			<div class="modal-body">
                <p>Nombre:</p><input>
                 <br><br><p>Descripcion:</p><input>
                 <br><br><p>Precio:</p><input>
                 <br><br><p>Cantidad:</p><input>
                 <br><br>

        	</div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" >Save changes</button>
            </div>
        </div>
    </div>
</div>

					<!--		

					MODAL 3
					
					-->


<div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="modal3" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content"> 
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Basic Modal</h4>
                	
						<!--
					Body
					MODAL
					-->

			</div>
			<div class="modal-body">
                <h3>Modal Body</h3>
                <div class="form-group">
  					<label for="usr">Name:</label>
  					<input type="text" class="form-control" >
				</div>
				<div class="form-group">
  					<label for="usr">Numero:</label>
  					<input type="text" class="form-control" >
				</div>
				<div class="form-group">
  					<label for="usr">Telefono:</label>
  					<input type="text" class="form-control" >
				</div>
				<div class="form-group">
  					<label for="usr">Name:</label>
  					<input type="text" class="form-control" >
				</div>
				<div class="form-group">
  					<label for="usr">Name:</label>
  					<input type="text" class="form-control" >
				</div>
				<div class="form-group">
  					<label for="usr">Name:</label>
  					<input type="text" class="form-control" >
				</div>
        	</div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>



<router-outlet> </router-outlet>
  `,
providers:[CotizadorComponent, ProductoService, Producto]
})
export class NavbarComponent  {
  public productosnuevos: Array<Producto>

NewProduct(producto:Producto)
{
  
}
	constructor()
  {
    
  }
}