import { Component } from '@angular/core';


@Component({
  selector: 'form-directive',
  template: `
  
    <div class="form-group">
  <label for="usr">Name:</label>
  <input type="text" class="form-control" id="usr">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="pwd">
</div>
    
      `,
       
})
export class FormComponent  {}