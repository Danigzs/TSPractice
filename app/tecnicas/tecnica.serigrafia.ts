import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {TecnicaService} from '../producto/tecnica.service';
import {Tecnica} from '../producto/tecnica';
/**
 * Config serigrafia  - Services
 */

import {AppConfigService} from './../appConfig/appConfig.service';
import {UbicacionesService} from './../tecnicas config/ubicaciones.service';
import {SerigrafiaTipoTintaService} from './../tecnicas config/SerigrafiaTipoTinta.service';
import {SerigrafiaPrecioBordesaService} from './../tecnicas config/serigrafia.PrecioBordesa.service';
import {SerigrafiaPrecioClienteService} from './../tecnicas config/serigrafia.PrecioCliente.service';
import {AppConfig} from './../appConfig/appConfig';






@Component({
  selector: 'tecnicaserigrafia',
    providers: [AppConfigService,UbicacionesService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnica.serigrafia.html"
       
})
export class TecnicaSerigrafiaComponent  {  
 public tecnica:Tecnica;
  public tecnicas: Array < Tecnica > ;
  constructor(private  _tecnicaService: TecnicaService) {
  }

  ngOnInit() {
   this.tecnica = new Tecnica();
   this.reloadTecnicas();
  }

  reloadTecnicas(){
      this.tecnica = new Tecnica();
      this._tecnicaService.getTecnicas().subscribe(
     data => {
       this.tecnicas = data;
     }
   )
  }
  agregarTecnica(){
    
    this._tecnicaService.addTecnica(this.tecnica).subscribe(
      data => {
    this.reloadTecnicas();

      }
    );
  }
  updateTecnica()
    {
       this._tecnicaService.addTecnica(this.tecnica).subscribe(
      data => {
        this.reloadTecnicas();
      }
    );
    }
}
