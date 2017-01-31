import { Component } from '@angular/core';


@Component({
  selector: 'clientes',
  template: `
  
<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">


            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Basic Modal</h4>
            </div>


						<!--
					Body
					MODAL
					-->

            <div class="modal-body">
                <h3>Modal Body</h3>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>


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