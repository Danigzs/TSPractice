import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
@Injectable()
export class ClienteService {
  clientes:Array<Cliente>;

  constructor() {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    var cliente3 = new Cliente();
    cliente1.setCliente(0,0,"BORDESA","BORDADOS","AVENIDA XYZ","NUEVO LEON","MONTERREY","COLONIA","MEXICO","1231","213312321","bordesa@bordesa.com","A","DASDDFAS");
    cliente2.setCliente(0,0,"BORDESA APODACA","BORDADOS","AVENIDA XYZ","NUEVO LEON","MONTERREY","COLONIA","MEXICO","1231","8112348481","bordesa@apodaca.com","atencion", "RFCKSAKD");
    cliente3.setCliente(0,0,"BORDESA GUADALUPE","BORDADOS","AVENIDA XYZ","NUEVO LEON","MONTERREY","COLONIA","MEXICO","1231","81145894","bordesa@guadalupe.com","atencion a","RFCASKODKASODSA");
    this.clientes = [cliente1,cliente2,cliente3];
  }
  addCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }
  getClientes() {
    return this.clientes;
  }
}