import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  ViewContainerRef
} from '@angular/core';
import {BordadoTipoService} from './BordadoTipo.service';
import {BordadoTipo} from './BordadoTipo';
import {AppConfig} from './../appConfig/appConfig';


@Component({
  selector: 'bordado-tipo',
  providers: [BordadoTipoService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas_config/bordado.config.tipo.html"

})
export class BordadoTipoComponent  {
  @Input() appConfig:  AppConfig  ;
  public bordadotipo:BordadoTipo;
  public bordados: Array < BordadoTipo > ;
  public isEditing:Boolean;
  constructor(private  _bordadoService: BordadoTipoService) {
  }
  
  ngOnInit() {
    this.isEditing = false;
    this. bordadotipo = new BordadoTipo();
    this.reloadTecnicas();
  }

  setEditMode(edit:boolean,bordado:BordadoTipo){
    this.isEditing = edit;
    if(edit){
      this.bordadotipo._id = bordado._id;
      this.bordadotipo.costo = bordado.costo;
      this.bordadotipo.nombre = bordado.nombre;
    }
    else {
      this.bordadotipo._id = 0;
      this.bordadotipo.costo = 0;
      this.bordadotipo.nombre = "";
    }
  }
  
  reloadTecnicas(){
    this.bordadotipo = new BordadoTipo();
    this._bordadoService.getTecnicas().subscribe(
      data => {
        this.bordados = data;
      }
      )
  }
  agregarTecnica(){
    if(this.bordadotipo.nombre.length > 0){

      if(this.isEditing){
        this.edit(this.bordadotipo);
      }
      else {
        this._bordadoService.addTecnica(this.bordadotipo).subscribe(
          data => {
            this.reloadTecnicas();

          }
        );
      }
    }
    else 
    {
      alert("Favor de introducir un nombre")
    }
  }
  updateTecnica()
  {
    this._bordadoService.addTecnica(this.bordadotipo).subscribe(
      data => {
        this.reloadTecnicas();
      }
    );
  }
  edit(_bordadoTipo:BordadoTipo){
    this._bordadoService.update(_bordadoTipo).subscribe(
      data => {
        this.setEditMode(false,null);
        this.reloadTecnicas();
      }
    );
  }
  delete(_bordadoTipo:BordadoTipo, index:number){
    this._bordadoService.delete(_bordadoTipo).subscribe(
      data => {
        this.reloadTecnicas();
      }
    );
  }
}

