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
import {ClienteService} from './cliente.service';
import {Cliente} from './cliente';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'add-client',
    providers: [ClienteService],
  styleUrls: ["./app/cliente/addClient.css", "app/styles/table.css"],
  templateUrl: "./app/cliente/addClient.html"
})

export class AddClientComponent  implements OnInit{
  @Input() OnClientAdded:Function;
  public cliente:Cliente;
  public isEditing:Boolean;
  constructor(private  _clientService: ClienteService) {
  }

  ngOnInit() {
      this.cliente = new Cliente();
  }



  addClient(client:Cliente)
  {
     
    this._clientService.addClient(this.cliente).subscribe(
      data => {
          this.OnClientAdded();
      }
    )
  }


  
}