import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SublimadoPrecioService} from './sublimadoPrecio.service';
  import {SublimadoPrecio} from './sublimadoPrecio';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'sublimado-precio',
      providers: [SublimadoPrecioService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/sublimado.config.precio.html"
         
  })
  export class SublimadoPrecioComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:SublimadoPrecio;
    public precio: Array < SublimadoPrecio > ;
    constructor(private  _bordadoService: SublimadoPrecioService) {
    }
  
    ngOnInit() {
     this. precios = new SublimadoPrecio();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new SublimadoPrecio();
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
  
  