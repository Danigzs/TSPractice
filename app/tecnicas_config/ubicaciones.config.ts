import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {UbicacionesService} from './ubicaciones.service';
  import {Ubicaciones} from './ubicaciones';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'ubicaciones',
      providers: [UbicacionesService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/ubicaciones.config.html"
         
  })
  export class UbicacionComponent  {
    @Input() appConfig:  AppConfig  ;    
    public ubicaciones:Ubicaciones;
    public ubicacion: Array < Ubicaciones > ;
    public isEditing:Boolean;    
    constructor(private  _bordadoService: UbicacionesService) {
    }
  
    ngOnInit() {
     this. ubicaciones = new Ubicaciones();
     this.reloadTecnicas();
     this.isEditing = false;
     
    }

    setEditMode(edit:boolean,bordado:Ubicaciones){
      this.isEditing = edit;
      if(edit){
        this.ubicaciones._id = bordado._id;
        
        this.ubicaciones.ubicaciones = bordado.ubicaciones;
      }
      else {
        this.ubicaciones._id = 0;       
        this.ubicaciones.ubicaciones = "";
      }
    }
  
    reloadTecnicas(){
        this.ubicaciones = new Ubicaciones();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.ubicacion = data;
       }
     )
    }
    agregarTecnica(){
      if(this.ubicaciones.ubicaciones.length > 0){
        if(this.isEditing){
          this.edit(this.ubicaciones);
        }
        else {
      this._bordadoService.addTecnica(this.ubicaciones).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
        );
      }
    }
    else{
      alert("Favor de introducir el nombre de la Posición.")
    }
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.ubicaciones).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
      edit(_ubicaciones:Ubicaciones){
        this._bordadoService.update(_ubicaciones).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_ubicaciones:Ubicaciones, index:number){
        this._bordadoService.delete(_ubicaciones).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }
  }
  
  