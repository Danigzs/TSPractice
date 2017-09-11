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
    templateUrl: "./app/tecnicas config/posiciones.config.html"
         
  })
  export class PosicionComponent  {
    @Input() appConfig:  AppConfig  ;    
    public posicion:Posiciones;
    public posiciones: Array < Posiciones > ;
    constructor(private  _bordadoService: PosicionesService) {
    }
  
    ngOnInit() {
     this. posicion = new Posiciones();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.posicion = new Posiciones();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.posiciones = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.posicion).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.posicion).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  