import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
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
   cliente:Cliente;
   public isEditing:Boolean;

   
  constructor(private  _clientService: ClienteService) {
  }

  ngOnInit() {
   //this.clientes = this._clienteService.getClientes();
   
  }
  setEditMode(edit:boolean,bordado:Cliente){
    this.isEditing = edit;
    if(edit){
      this.cliente._id = bordado._id;
      this.cliente.code = bordado.code;
      this.cliente.name = bordado.name;
      this.cliente.businessName = bordado.businessName;
      this.cliente.address = bordado.address;
      this.cliente.state = bordado.state;
      this.cliente.town = bordado.town;
      this.cliente.district = bordado.district;

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
  }
  delete(client:Cliente, index:number){
    this._clientService.delete(client).subscribe(
     /* data => {
        this.reloadTecnicas();
      }*/
    );
    
  }
  
}