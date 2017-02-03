import { Component } from '@angular/core';

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
            <li><a href="#" data-toggle="modal" data-target="#modal2">Nuevo</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Ver Inventario</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Modificar</a></li>
          </ul>
        </li>

        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"> Clientes </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" data-toggle="modal" data-target="#basicModal">Nuevo</a></li>
            <li role="presentation" class="divider"></li>
            <li><a routerLink="/clientes">clientes</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>


        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-book"> Page 3 </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="http://www.w3schools.com/css/css_navbar.asp">Page 1-1</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-2</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-3</a></li>
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

<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">   



            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Cliente nuevo</h4>
            </div>


						<!--
					Body
					MODAL
					-->



            	<div class="modal-body">
            			<form class="form-inline" role="form">
                          <div class="form-group">
                              
           					   <label>Nombre</label>           					  
  							  <input type="text" class="form-control" id="usr" placeholder="Nombre  "> 
  							  </div>
                        	</form>				  					  
  							  
  							  <form class="form-inline" role="form">
                          <div class="form-group">
                              
           					   <label>Domicilio</label>           					  
  							  <input type="text" class="form-control" id="usr" placeholder="Domicilio"> 
  							  </div>
                        	</form>

                        	<form class="form-inline" role="form">
                          <div class="form-group">
                              
           					   <label>Telefono</label>           					  
  							  <input type="text" class="form-control" id="usr" placeholder="Telefono"> 
  							  </div>
                        	</form>

                        	<form class="form-inline" role="form">
                          <div class="form-group">
                              
           					   <label>Email</label>           					  
  							  <input type="text" class="form-control" id="usr" placeholder="Email" push="right"> 
  							  </div>
                        	</form>
                          
                </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
					<!--

					MODAL 2

					-->
  
<div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
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
                
                 

        	</div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
  					<input type="text" class="form-control" id="usr">
				</div>
				<div class="form-group">
  					<label for="usr">Numero:</label>
  					<input type="text" class="form-control" id="usr">
				</div>
				<div class="form-group">
  					<label for="usr">Telefono:</label>
  					<input type="text" class="form-control" id="usr">
				</div>
				<div class="form-group">
  					<label for="usr">Name:</label>
  					<input type="text" class="form-control" id="usr">
				</div>
				<div class="form-group">
  					<label for="usr">Name:</label>
  					<input type="text" class="form-control" id="usr">
				</div>
				<div class="form-group">
  					<label for="usr">Name:</label>
  					<input type="text" class="form-control" id="usr">
				</div>
        	</div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>



<router-outlet></router-outlet>
  `,
  
})
export class NavbarComponent  {
  constructor() {
    this.name = 'Angular2'
    this.date = new Date();
  }
}
