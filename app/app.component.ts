import { Component, OnInit, ElementRef} from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  
    <h1>Testing angular directives components</h1>

    <label id="target" for="grp_option">Selected: </label>
		<br/>
		<select id="grp_option">
		    <optgroup label="Group 1">
		        <option>Option 1.1</option>
		    </optgroup>
		    <optgroup label="Group 2">
		        <option>Option 2.1</option>
		        <option>Option 2.2</option>
		    </optgroup>
		    <optgroup label="Group 3" enabled>
		        <option>Option 3.1</option>
		        <option>Option 3.2</option>
		        <option>Option 3.3</option>
		    </optgroup>
		</select>
    
      `,
        styles: [`

  h1{
  position: fixed;
  bottom: 0;
  width: 100%

  }
    
   `]
})
export class AppComponent  {
}