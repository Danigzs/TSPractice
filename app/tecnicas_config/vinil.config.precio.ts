import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {VinilPrecioService} from './vinilPrecio.service';
  import {VinilPrecio} from './vinilPrecio';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'vinil-precio',
      providers: [VinilPrecioService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/vinil.config.precio.html"
         
  })
  export class VinilPrecioComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:VinilPrecio;
    public precio: Array < VinilPrecio > ;
    constructor(private  _bordadoService: VinilPrecioService) {
    }
  
    ngOnInit() {
     this. precios = new VinilPrecio();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new VinilPrecio();
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
  
  