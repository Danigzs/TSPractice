import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {VinilPrecioMaquilaService} from './vinilPrecioMaquila.service';
  import {VinilPrecioMaquila} from './vinilPrecioMaquila';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'vinil-preciomaquila',
      providers: [VinilPrecioMaquilaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/vinil.config.precioMaquila.html"
         
  })
  export class VinilPrecioMaquilaComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:VinilPrecioMaquila;
    public precio: Array < VinilPrecioMaquila > ;
    constructor(private  _bordadoService: VinilPrecioMaquilaService) {
    }
  
    ngOnInit() {
     this. precios = new VinilPrecioMaquila();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new VinilPrecioMaquila();
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
  
  