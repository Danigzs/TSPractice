import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TecnicaService} from '../producto/tecnica.service';
import {Tecnica} from '../producto/tecnica';



@Component({
  selector: 'tecnicasublimado',
    providers: [TecnicaService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnica.sublimado.html"
       
})
export class TecnicaSublimadoComponent  {

  public tecnica:Tecnica;

}