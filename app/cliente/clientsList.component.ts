import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  ViewContainerRef
} from '@angular/core';
import {ClienteService} from './cliente.service';
import {Cliente} from './cliente';
import { UserService } from '../security/user.service';
import { User } from '../register/user';



@Component({
  selector: 'clients-list',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/clients-list.css", "app/styles/table.css"],
  templateUrl: "./app/cliente/clients-list.html"
})

export class ClientsListComponent  implements OnInit{
   @Input() clientes: Array < Cliente > ;
   @Input() SetOnEditMode:Function;
   @Input() OnDeleteClient:Function;
   clientname:string;
   clientrfc:string;
   clientrazon:string;
   public allClientes:Array<Cliente>;
   cliente:Cliente;
   public isEditing:Boolean;
  isUserAdmin:Boolean;
  userCanEdit:Boolean;
  currentUser:User;
   
  constructor(private  _clientService: ClienteService, private _userService:UserService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.allClientes = this.clientes;  
    }, 1000);
    
   //this.clientes = this._clienteService.getClientes();
   this.isUserAdmin = this._userService.isUserAdmin();
   this.currentUser = this._userService.getUser();

   if( this.currentUser.role._id == 1 ||this.currentUser.role._id == 2){
     this.userCanEdit = true;
   }

  }
  setEditMode(edit:boolean,client:Cliente){
    this.isEditing = edit;
    if(!this.cliente){
      this.cliente = new Cliente();
    }
    if(edit){
      
      this.cliente._id = client._id;
      this.cliente.code = client.code;
      this.cliente.name = client.name;
      this.cliente.businessName = client.businessName;
      this.cliente.address = client.address;
      this.cliente.state = client.state;
      this.cliente.town = client.town;
      this.cliente.district = client.district;

    }
    else {
      this.cliente._id = 0;
      this.cliente.code = "";
      this.cliente.name = "";
      this.cliente.businessName = "";
      this.cliente.address = "";
      this.cliente.state = "";
      this.cliente.town = "";
      this.cliente.district = "";
    
    }
    this.SetOnEditMode(edit,client);
     
  }
  delete(client:Cliente, index:number){
    this._clientService.delete(client).subscribe(
      
      data => {
        this.OnDeleteClient();
      }
    );
    
  }
  
  onFilterNameChanged(){
    if(this.clientname == "")
    {
      this.clientes = this.allClientes;
    }
     
    var name = this.clientname;
    this.clientes = this.allClientes.filter((client,index) => {
      return client.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1 ;
    });
  }

  onFilterRFCChanged(){
    if(this.clientrfc == "")
    {
      this.clientes = this.allClientes;
    }
     
    var rfc = this.clientrfc;
    this.clientes = this.allClientes.filter((client,index) => {
      return client.rfc.toLocaleLowerCase().indexOf(rfc.toLocaleLowerCase()) !== -1 ;
    });
  }

  onFilterRazonChanged(){
    if(this.clientrazon == "")
    {
      this.clientes = this.allClientes;
    }
     
    var razon = this.clientrazon;
    this.clientes = this.allClientes.filter((client,index) => {
      return client.businessName.toLocaleLowerCase().indexOf(razon.toLocaleLowerCase()) !== -1 ;
    });
  }
}