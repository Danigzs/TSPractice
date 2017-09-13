import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {BordadoService} from './bordado.service';
import {BordadoSizeService} from './../tecnicas config/BordadoSize.service';
import {BordadoTipoService} from './../tecnicas config/BordadoTipo.service';
import {BordadoPuntadasService} from './../tecnicas config/BordadoPuntadas.service';
import {PosicionesService} from './../tecnicas config/posiciones.service';
import {BordadoTipoComponent} from './../tecnicas config/bordado.config.tipo'
import {BordadoTipo} from './../tecnicas config/bordadoTipo'

import {Bordado} from './bordado';



@Component({
  selector: 'tecnicabordado',
    providers: [BordadoService,BordadoSizeService,BordadoPuntadasService,BordadoTipoService,PosicionesService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnica.bordado.html"
       
})
export class TecnicaBordadoComponent  {
  public bordado:Bordado;
  public bordados: Array < Bordado > ;
  public bordadoNombre: Array <BordadoTipo>
  bordadotipoSelected = new BordadoTipo;
  constructor(private  _bordadoService: BordadoTipoService) {
  }

  ngOnInit() {
   this. bordado = new Bordado();
   this.reloadTecnicas();
  }

  reloadTecnicas(){
      this.bordado = new Bordado();
      this._bordadoService.getTecnicas().subscribe(
     data => {
       this.bordadoNombre = data;
     }
   )
  }
  agregarTecnica(){
    
    this._bordadoService.addTecnica(this.bordadotipoSelected).subscribe(
      data => {
    this.reloadTecnicas();

      }
    );
  }
  updateTecnica()
    {
       this._bordadoService.addTecnica(this.bordadotipoSelected).subscribe(
      data => {
        this.reloadTecnicas();
      }
    );
    }

    updateCliente(event: Event) {
      console.warn(this.bordadotipoSelected);
    }
    
}

