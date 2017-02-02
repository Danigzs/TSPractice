import { Component } from '@angular/core';


@Component({
  selector: 'clientes',
  template: `
  




    <div class="table-responsive">          
  <table class="table table-bordered">
    
      <tr>
        <th>#</th>
        <th>Fecha</th>
        <th>Cliente</th>
        <th>Subtotal</th>
        <th>IVA</th>
        <th>Descuento</th>
        <th>Total</th>
        <th>Tipo de venta</th>     
      </tr>

      <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
        <td>Not assigned</td>
      	<td>Not assigned</td>
        <td>Not assigned</td>
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
        <td>Not assigned</td>
        <td>Not assigned</td>
        <td>Not assigned</td>
        </tr>    
    
      `,
       
})
export class ClientesComponent  {}