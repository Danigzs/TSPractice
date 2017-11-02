import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,
    ViewContainerRef
  } from '@angular/core';
  import {ColoresService} from './colores.service';
  import {Colores} from './colores';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  
  @Component({
    selector: 'bordado-colores',
      providers: [ColoresService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/bordado.config.colores.html"
         
  })
  export class ColoresComponent  {
    @Input() appConfig:  AppConfig ;   
    public colores:Colores;
    public color: Array < Colores > ;
    cantidad = 1000;
    constructor(private  _tecnicaService: ColoresService) {
    }
  
    ngOnInit() {
     this.colores = new Colores();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.colores = new Colores();
        this._tecnicaService.getTecnicas().subscribe(
       data => {
         this.color = data;
       }
     )
    }
    agregarTecnica(){
      if(this.colores.color != 0 && this.colores.hilo.length > 0 && this.colores.marca.length > 0){
      this._tecnicaService.addTecnica(this.colores).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
      }
     else 
      {
        alert("Favor de llenar todos los campos.")
      }
    }
    updateTecnica()
      {
         this._tecnicaService.addTecnica(this.colores).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  
  }