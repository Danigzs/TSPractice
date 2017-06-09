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



@Component({
  selector: 'clientes',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/clientes.css"],
  templateUrl: "./app/cliente/clientes.html"
       
})
export class ClientesComponent  {
  @Input() showClients:Boolean;
  @Output() closeClientAdded = new EventEmitter();

  public show = true;
  public clientes: Array < Cliente > ;
  public cliente:Cliente;
  
  constructor(private  _clienteService: ClienteService) {
    
    this.clientes = _clienteService.getClientes();
       
  }

  ngOnInit() {
   this.cliente = new Cliente();
   this.clientes = this._clienteService.getClientes();
   this.show = this.showClients == undefined?true:false
  }

  agregarCliente(){
    this._clienteService.addCliente(this.cliente);
    if(this.closeClientAdded)
    this.closeClientAdded.emit(this.cliente);
    this.cliente = new Cliente();
    this.clientes = this._clienteService.getClientes();   
    
  }
}