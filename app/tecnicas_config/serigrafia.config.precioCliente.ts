import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SerigrafiaPrecioClienteService} from './serigrafia.precioCliente.service';
  import {SerigrafiaPrecioCliente} from './serigrafiaPrecioCliente';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'serigrafia-preciocliente',
      providers: [SerigrafiaPrecioClienteService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/serigrafia.config.precioCliente.html"
         
  })
  export class SerigrafiaPrecioClienteComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:SerigrafiaPrecioCliente;
    public precio: Array < SerigrafiaPrecioCliente > ;
    constructor(private  _bordadoService: SerigrafiaPrecioClienteService) {
    }
  
    ngOnInit() {
     this. precios = new SerigrafiaPrecioCliente();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new SerigrafiaPrecioCliente();
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