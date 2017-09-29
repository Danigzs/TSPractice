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
      
      this._tecnicaService.addTecnica(this.colores).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
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