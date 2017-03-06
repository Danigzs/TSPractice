import {
    Component,
    OnInit,
    ElementRef
} from '@angular/core';
import {
    CotizadorService
} from './cotizador.service';
import {
    ClienteService
} from './cliente/cliente.service'
import {
    Cliente
} from './cliente/cliente'


@Component({
    selector: 'cotizador',
    providers: [CotizadorService, ClienteService],
    styleUrls: ["app/cotizador.css"],
    templateUrl: "app/cotizador.html"




})
export class CotizadorComponent {
    componentName: 'CotizadorComponent';
    public cotizaciones: Array < any > ;
    public clientes: Array < Cliente > ;
    selectedValue = {};
    clienteSelected = {};
    updateCliente(event) {
        console.log(event);
    }
    //Assign 
    constructor(_cotizadorService: CotizadorService, _clienteService: ClienteService) {
        this.cotizaciones = _cotizadorService.getCotizaciones();
        this.clientes = _clienteService.getClientes();
        this.clienteSelected = this.clientes[0];
    }
}