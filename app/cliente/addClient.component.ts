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
import { User } from '../register/user';



@Component({
  selector: 'add-client',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/addClient.css", "app/styles/table.css"],
  templateUrl: "./app/cliente/addClient.html"
})

export class AddClientComponent  implements OnInit{
  @Input() OnClientAdded:Function;
   
  public users:Array<User>;
  public userSelected:User;
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

      this._userService.getSellerUsers().subscribe( data => {
        this.users = data;
        this.userSelected = this.users[0];
      });
  }



  addClient(client:Cliente)
  {

    if(client.name.length == 0){
      alert("Ingresar nombre");
      return ;
    }

    if(client.email.length == 0){
      alert("Ingresar correo");
      return ;
    }

    if(client.phone.length == 0){
      alert("Ingresar teléfono");
      return ;
    }

    if(client.rfc.length == 0){
      alert("Ingresar RFC");
      return ;
    }

    if(client.code.length == 0){
      alert("Ingresar código ");
      return ;
    }

    if(client.address.length == 0){
      alert("Ingresar dirección ");
      return ;
    }

    if(client.businessName.length == 0){
      alert("Ingresar Razón Social ");
      return ;
    }

    client.vendedor = this.userSelected;
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

  if(client.name.length == 0){
    alert("Ingresar nombre");
    return ;
  }

  if(client.email.length == 0){
    alert("Ingresar correo");
    return ;
  }

  if(client.phone.length == 0){
    alert("Ingresar teléfono");
    return ;
  }

  if(client.rfc.length == 0){
    alert("Ingresar RFC");
    return ;
  }

  if(client.code.length == 0){
    alert("Ingresar código ");
    return ;
  }

  if(client.address.length == 0){
    alert("Ingresar dirección ");
    return ;
  }

  if(client.businessName.length == 0){
    alert("Ingresar Razón Social ");
    return ;
  }

  client.vendedor = this.userSelected;

  this._clientService.update(this.cliente).subscribe(
    data => {
        this.OnClientAdded();
        this.cancelEdit();
    }
  )
 }


  
}