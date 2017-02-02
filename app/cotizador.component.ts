import { Component } from '@angular/core';


@Component({
  selector: 'cotizador',
  template: `
  

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
                        <label for="">Producto</label>
                        <form class="form-inline" role="form">
                          <div class="form-group">
                        <select class="form-control" placeholder="Cliente">                         
                    <option value="" disabled selected>Tecnicas</option>
                    <option value="hurr">Bordesa</option>
                    <option value="hurr">Not assigned</option>
                    <option value="hurr">Not assigned</option>
                    </select>
                          <input name="email" id="email" type="text" required class="form-control" placeholder="Email" disabled="disabled">
                          <input name="telefono" id="telefono" type="text" required class="form-control" placeholder="Telefono" disabled="disabled">                          
                          </div>
                        </form>

      `,
        
})
export class CotizadorComponent  {}