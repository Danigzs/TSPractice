import { Component } from '@angular/core';


@Component({
  selector: 'clientes',
  template: `


    <div class="table-responsive">          
  <table class="table table-bordered">
    
      <tr>
        <th>Fecha</th>
        <th>Nombre</th>
        <th>Domicilio</th>
        <th>Telefono</th>
        <th>Email</th>           
      </tr>

      <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
        <td>Not assigned</td>
      	<td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>


      </tr>
      <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
        <td>Not assigned</td>
      	<td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
       

      </tr>

		<tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
        <td>Not assigned</td>
      	<td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
       
        </tr>

        <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
        <td>Not assigned</td>
      	<td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
        
        </tr>    
    
      `,
       
})
export class ClientesComponent  {}