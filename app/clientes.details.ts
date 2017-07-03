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
import {ClienteService} from './cliente/cliente.service';
import {Cliente} from './cliente/cliente';
import {ClientsListComponent} from './cliente/clientsList.component';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'clientes',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/clientes.css", "app/styles/table.css"],
  templateUrl: "./app/cliente/clientes.html"
       
})
export class ClientesComponent implements OnInit {
  @Input() showClients:Boolean;
  @Output() closeClientAdded = new EventEmitter();
 
  public show = true;
  public clientes:Array<Cliente> = [];
  public cliente:Cliente;
  
  constructor(private  _clienteService: ClienteService) {

  }

  ngOnInit() {
   this.cliente = new Cliente();
   this.reloadClients();
   this.show = this.showClients == undefined?true:false
  }

  reloadClients(){
this._clienteService.getClients().subscribe(
      clients => {
        this.clientes = clients;
        
      }
   );
  }
  agregarCliente(){ 
    
    this._clienteService.addClient(this.cliente).subscribe(
      data => {
        if(this.closeClientAdded)
          this.closeClientAdded.emit(this.cliente);
          this.cliente = new Cliente();
          this.reloadClients();
      }
    )


  }
}