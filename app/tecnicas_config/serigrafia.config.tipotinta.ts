
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
  public isEditing:Boolean;  
  constructor(private  _tecnicaService: SerigrafiaTipoTintaService) {
  }

  ngOnInit() {
    this.isEditing = false;    
   this.tipos = new SerigrafiaTipoTinta();
   this.reloadTecnicas();
  }

  setEditMode(edit:boolean,bordado:SerigrafiaTipoTinta){
    this.isEditing = edit;
    if(edit){
      this.tipos._id = bordado._id;
      this.tipos.costo = bordado.costo;
      this.tipos.tipotinta = bordado.tipotinta;
    }
    else {
      this.tipos._id = 0;
      this.tipos.costo = 0;
      this.tipos.tipotinta = "";
    }
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
      if(this.isEditing){
        this.edit(this.tipos);
      }
      else {
    this._tecnicaService.addTecnica(this.tipos).subscribe(
      data => {
    this.reloadTecnicas();

      }
    );
  }
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
    edit(_tipos:SerigrafiaTipoTinta){
      this._tecnicaService.update(_tipos).subscribe(
        data => {
          this.setEditMode(false,null);
          this.reloadTecnicas();
        }
      );
    }
    delete(_tipos:SerigrafiaTipoTinta, index:number){
      this._tecnicaService.delete(_tipos).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      
    }

}
  
