import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {ClienteService} from './cliente.service';
import {Cliente} from './cliente';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../security/user.service';



@Component({
  selector: 'add-client',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/addClient.css", "app/styles/table.css"],
  templateUrl: "./app/cliente/addClient.html"
})

export class AddClientComponent  implements OnInit{
  @Input() OnClientAdded:Function;
   
  
  public cliente:Cliente;
  public isEditing:Boolean;
  isUserAdmin:Boolean;
  
  constructor(private  _clientService: ClienteService, private _userService:UserService) {
    this.OnEditMode = this.OnEditMode.bind(this);
    this.OnEditModeParent = this.OnEditModeParent.bind(this);
    
  }

  OnEditModeParent = function(edit:boolean,client:Cliente){
    this.isEditing  = edit;
    this.cliente = client;
  }
  OnEditMode = function(edit:boolean,client:Cliente){
    this.isEditing  = edit;
    this.cliente = client;
  }

  
  ngOnInit() {
      this.cliente = new Cliente();
      this.isEditing = false;

      this.isUserAdmin = this._userService.isUserAdmin();
  }



  addClient(client:Cliente)
  {
     if(this.isEditing){
       this.saveEdit(client);
     }
     else {
        
    this._clientService.addClient(this.cliente).subscribe(
      data => {
          this.OnClientAdded();
          this.cancelEdit();
      }
    )
  }}

  cancelEdit(){
    this.isEditing = false;
    this.cliente = new Cliente();
  }

 saveEdit(client:Cliente){
    
  this._clientService.update(this.cliente).subscribe(
    data => {
        this.OnClientAdded();
        this.cancelEdit();
    }
  )
 }


  
}