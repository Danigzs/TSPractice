import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SublimadoPrecioMaquilaService} from './sublimadoPrecioMaquila.service';
  import {SublimadoPrecioMaquila} from './sublimadoPrecioMaquila';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'sublimado-preciomaquila',
      providers: [SublimadoPrecioMaquilaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/sublimado.config.preciomaquila.html"
         
  })
  export class SublimadoPrecioMaquilaComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:SublimadoPrecioMaquila;
    public precio: Array < SublimadoPrecioMaquila > ;
    constructor(private  _bordadoService: SublimadoPrecioMaquilaService) {
    }
  
    ngOnInit() {
     this. precios = new SublimadoPrecioMaquila();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new SublimadoPrecioMaquila();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.precio = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.precios).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.precios).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  