import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {PosicionesService} from './posiciones.service';
  import {Posiciones} from './posiciones';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'posiciones',
      providers: [PosicionesService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/posiciones.config.html"
         
  })
  export class PosicionComponent  {
    @Input() appConfig:  AppConfig  ;    
    public posiciones:Posiciones;
    public posicion: Array < Posiciones > ;
    public isEditing:Boolean;    
    constructor(private  _bordadoService: PosicionesService) {
    }
  
    ngOnInit() {
      this.isEditing = false;
      
     this. posiciones = new Posiciones();
     this.reloadTecnicas();
    }
    setEditMode(edit:boolean,bordado:Posiciones){
      this.isEditing = edit;
      if(edit){
        this.posiciones._id = bordado._id;
        this.posiciones.costo = bordado.costo;
        this.posiciones.posiciones = bordado.posiciones;
      }
      else {
        this.posiciones._id = 0;
        this.posiciones.costo = 0;
        this.posiciones.posiciones = "";
      }
    }
  
    reloadTecnicas(){
        this.posiciones = new Posiciones();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.posicion = data;
       }
     )
    }
    agregarTecnica(){
      if(this.posiciones.posiciones.length > 0){
        if(this.isEditing){
          this.edit(this.posiciones);
        }
        else{
        

      this._bordadoService.addTecnica(this.posiciones).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
      }
     else 
      {
        alert("Favor de introducir una Posición")
      }
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.posiciones).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
      edit(_posiciones:Posiciones){
        this._bordadoService.update(_posiciones).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_posiciones:Posiciones, index:number){
        this._bordadoService.delete(_posiciones).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
      }
  }