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
    templateUrl: "./app/tecnicas config/ubicaciones.config.html"
         
  })
  export class UbicacionComponent  {
    @Input() appConfig:  AppConfig  ;    
    public ubicaciones:Ubicaciones;
    public ubicacion: Array < Ubicaciones > ;
    constructor(private  _bordadoService: UbicacionesService) {
    }
  
    ngOnInit() {
     this. ubicaciones = new Ubicaciones();
     this.reloadTecnicas();
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
      this._bordadoService.addTecnica(this.ubicaciones).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }else{
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
  }
  
  