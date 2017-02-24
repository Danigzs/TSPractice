import { Component } from '@angular/core';


@Component({
  selector: 'modals',
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
                  <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-md-3">
                      <div class="form-group two-fields">
                        <label for="">Cliente</label>
                        <div class="input-group">
                        <select class="form-control" placeholder="Cliente">                         
                    <option value="" disabled selected>Select your option</option>
                    <option value="hurr">Bordesa</option>
                    <option value="hurr">Not assigned</option>
                    <option value="hurr">Not assigned</option>
                    </select>
                          <input name="email" id="email" type="text" required class="form-control" placeholder="Email" disabled="disabled">
                          <input name="telefono" id="telefono" type="text" required class="form-control" placeholder="Telefono" disabled="disabled">
                          
                      </div>
                    </div>
                </div>
              </div>
          </div>
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

  `,
  
})
export class ModalComponent  {}