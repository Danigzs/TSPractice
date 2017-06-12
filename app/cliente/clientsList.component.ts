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
  styleUrls: ["./app/cliente/clients-list.css"],
  templateUrl: "./app/cliente/clients-list.html"
})

export class ClientsListComponent  implements OnInit{
   @Input() clientes: Array < Cliente > ;
   
  constructor() {
  }

  ngOnInit() {
   //this.clientes = this._clienteService.getClientes();
   
  }
  
}