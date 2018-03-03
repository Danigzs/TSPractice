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



@Component({
  selector: 'clients-list',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/clients-list.css", "app/styles/table.css"],
  templateUrl: "./app/cliente/clients-list.html"
})

export class ClientsListComponent  implements OnInit{
   @Input() clientes: Array < Cliente > ;
   @Input() SetOnEditMode:Function;
   cliente:Cliente;
   public isEditing:Boolean;

   
  constructor(private  _clientService: ClienteService) {
  }

  ngOnInit() {
   //this.clientes = this._clienteService.getClientes();
    
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
     /* data => {
        this.reloadTecnicas();
      }*/
    );
    
  }
  
}