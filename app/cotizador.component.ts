import { Component, OnInit, ElementRef} from '@angular/core';




@Component({
  selector: 'cotizador',
  template: `                   

                    <p>Fecha: 
                     {{date | date: 'dd'}}/{{date | date:'MM'}}/{{date | date: 'yyyy'}}</p>

                           


                        <label for="">Cliente</label>
                        <form class="form-inline" role="form">
                          <div class="form-group">
                        <select class="form-control" placeholder="Cliente" push="left">
                    <option value="" disabled selected>Select your option</option>
                    <option value="hurr">Bordesa</option>
                    <option value="hurr">Not assigned</option>
                    <option value="hurr">Not assigned</option>
                    </select>
                          <input name="email" id="email" type="text" required class="form-control" placeholder="Email" disabled="disabled">
                          <input name="telefono" id="telefono" type="text" required class="form-control" placeholder="Telefono" disabled="disabled">
                          </div>
                        </form>
                        <li role="presentation" class="divider"></li>
                        
                        <label for="">Producto</label>
                        <form class="form-inline" role="form">
                          <div class="form-group">




                          <label id="target" for="grp_option">Selected: </label>
                            <br/>
                            <select class="form-control" id="grp_option">
                             <option value="" disabled selected>Tecnicas</option>
                                <optgroup label="Group 1">
                                    <option>Option 1.1</option>
                                </optgroup>
                                <optgroup label="Group 2">
                                    <option>Option 2.1</option>
                                    <option>Option 2.2</option>
                                </optgroup>
                                <optgroup label="Group 3" disabled>
                                    <option>Option 3.1</option>
                                    <option>Option 3.2</option>
                                    <option>Option 3.3</option>
                                </optgroup>
                            </select>



                        
                   
                    
                                  <select class="form-control" placeholder="Grafico">
                            <option value="" disabled selected>Ubicacion del grafico</option>
                            </select>

                              <button type="button" class="btn btn-default">Submit</button>

                            <select class="form-control" placeholder="Talla">
                            <option value="" disabled selected>Talla</option>
                            </select>

                          </div>
                        </form>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation" class="divider"></li>


                        <form class="form-inline" role="form">
                            <div class="form-group">
                            <label>Cantidad:</label>
                            <input type="text" class="form-control" id="cant" placeholder="Cantidad">
                            <label>Precio de prenda:</label>
                            <input type="text" class="form-control" id="usr" placeholder="Precio prenda" disabled="disabled">
                            <label>Precio de Graficos:</label>
                            <input type="text" class="form-control" id="usr" placeholder="Precio Grafico" disabled="disabled">
                            <label>Precio Final:</label>
                            <input type="text" class="form-control" id="usr" placeholder="Precio Final" disabled="disabled">
                            </div>
                        </form>


                        <table class="table table-bordered">
    
                          <tr>
                            <th>Fecha</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Subtotal</th>
                            <th>IVA</th>
                            <th>Total</th>                                
                          </tr>

                          <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
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
                            

                          </tr>

                          <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
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
                            
                            </tr>
                            <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
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
                            
                            </tr>
                            <tr class='clickable-row' data-href='#'data-toggle="modal" data-target="#basicModal">
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
export class CotizadorComponent implements OnInit  {
    constructor(private _elmRef: ElementRef) { }

    ngOnInit() {
       $(document).ready(function () {
    $('#grp_option').on('change', function () {
        showLabel();
    });

    // fire on page load
    $('#grp_option').change();
});

function showLabel() {
    var selected = $('#grp_option :selected');
    var item = selected.text();
    var group = selected.parent().attr('label');
    $('#target').text('Selected: ' + group + ' - ' + item);
}
    }
}