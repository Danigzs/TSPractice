import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {TransferPrecioMaquilaService} from './transferPrecioMaquila.service';
  import {TransferPrecioMaquila} from './transferPrecioMaquila';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'transfer-precioMaquila',
      providers: [TransferPrecioMaquilaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/transfer.config.preciomaquila.html"
         
  })
  export class TransferPrecioMaquilaComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:TransferPrecioMaquila;
    public precio: Array < TransferPrecioMaquila > ;
    constructor(private  _bordadoService: TransferPrecioMaquilaService) {
    }
  
    ngOnInit() {
     this. precios = new TransferPrecioMaquila();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new TransferPrecioMaquila();
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
  
  