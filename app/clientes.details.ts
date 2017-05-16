import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ClienteService} from './cliente/cliente.service';
import {Cliente} from './cliente/cliente';



@Component({
  selector: 'clientes',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/clientes.css"],
  templateUrl: "./app/cliente/clientes.html"
       
})
export class ClientesComponent  {
  public clientes: Array < Cliente > ;
  public cliente:Cliente;
  private clienteService:ClienteService;
  constructor(private  _clienteService: ClienteService) {
    this.clienteService = _clienteService;
    this.clientes = _clienteService.getClientes();
       
  }

  ngOnInit() {
   this.cliente = new Cliente();
  }

  agregarCliente(){
    this.clienteService.addCliente(this.cliente);
    this.cliente = new Cliente();
  }
}