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
            <li><a href="http://www.w3schools.com/css/css_navbar.asp">Nuevo</a></li>
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
  
  `,
  
})
export class NavbarComponent  {}
