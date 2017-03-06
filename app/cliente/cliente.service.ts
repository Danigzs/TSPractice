import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
@Injectable()
export class ClienteService {
  clientes:Array<Cliente>;

  constructor() {
    this.clientes = [ new Cliente("Bordesa","guadalupe"), new Cliente("bordesa 2","gpe")];
  }

  getClientes() {
    return this.clientes;
  }
}