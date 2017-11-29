
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  ViewContainerRef
} from '@angular/core';
import {SerigrafiaTipoTintaService} from './SerigrafiaTipoTinta.service';
import { SerigrafiaTipoTinta } from './SerigrafiaTipoTinta';
import {AppConfig} from './../appConfig/appConfig';

@Component({
  selector: 'tinta-tipo',
  providers:[SerigrafiaTipoTintaService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas_config/serigrafia.config.tipotinta.html"
})
export class TipoTintaComponent  {
  @Input() appConfig:  AppConfig ;    
  public tipos:SerigrafiaTipoTinta;
  public tipotinta: Array < SerigrafiaTipoTinta > ;
  constructor(private  _tecnicaService: SerigrafiaTipoTintaService) {
  }

  ngOnInit() {
   this.tipos = new SerigrafiaTipoTinta();
   this.reloadTecnicas();
  }

  reloadTecnicas(){
      this.tipos = new SerigrafiaTipoTinta();
      this._tecnicaService.getTecnicas().subscribe(
     data => {
       this.tipotinta = data;
     }
   )
  }
  agregarTecnica(){
    if(this.tipos.tipotinta.length > 0){
    this._tecnicaService.addTecnica(this.tipos).subscribe(
      data => {
    this.reloadTecnicas();

      }
    );
  }
  else {
    alert("Favor de introducir un Tipo de Tinta.")
  }
  }
  updateTecnica()
    {
       this._tecnicaService.addTecnica(this.tipos).subscribe(
      data => {
        this.reloadTecnicas();
      }
    );
    }

}
  
