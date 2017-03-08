import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
@Injectable()
export class ClienteService {
  clientes:Array<Cliente>;

  constructor() {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    var cliente3 = new Cliente();
    cliente1.nombre = "Bordesa";
    cliente2.nombre = "Bordesa 2";
    cliente3.nombre = "Bordesa 3";
    this.clientes = [cliente1,cliente2,];
  }

  getClientes() {
    return this.clientes;
  }
}