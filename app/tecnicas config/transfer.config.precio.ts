import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {TransferPrecioService} from './transferPrecio.service';
  import {TransferPrecio} from './transferPrecio';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'transfer-precio',
      providers: [TransferPrecioService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/transfer.config.precio.html"
         
  })
  export class TransferPrecioComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:TransferPrecio;
    public precio: Array < TransferPrecio > ;
    constructor(private  _bordadoService: TransferPrecioService) {
    }
  
    ngOnInit() {
     this. precios = new TransferPrecio();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new TransferPrecio();
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
  
  