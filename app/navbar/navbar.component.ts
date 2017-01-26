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
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>

    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-folder-close"> Cotizaciones </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="http://www.w3schools.com/js/js_window_screen.asp" target="_blank">link text</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-2</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-folder-open"> Inventario </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" data-toggle="modal" data-target="#basicModal">Nuevo</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Ver Inventario</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Modificar</a></li>
          </ul>      
        </li>

        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"> Clientes </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="http://www.w3schools.com/css/css_navbar.asp">Page 1-1</a></li>
            <li role="presentation" class="divider"></li>
            <li><a href="#">Page 1-2</a></li>
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

<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">   



            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Basic Modal</h4>

                	<h1>Datos del articulo</h1>
        		<form action="demo_form.asp">
 				 	First name: <input type="text" name="fname"><br>
  				 	Last name: <input type="text" name="lname"><br>
  					<input type="submit" value="Submit">
				</form>

					<li>
                        <input type="file" id="myfile" name="myfile" class="rm-input" onchange="selectedFile();"/></li>
    				<li>
						<div id="fileSize"></div></li>
    				<li>
						<div id="fileType"></div></li>
    				<li>
                        <input type="button" value="Subir Archivo" onClick="uploadFile()" class="rm-button" /></li>

            </div>
            <div class="modal-body">
                <h3>Modal Body</h3>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">
                    Save changes
                </button>
            </div>
        </div>
    </div>
</div>
  
  `,
  
})
export class NavbarComponent  {}
