import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SerigrafiaPrecioBordesaService} from './serigrafia.precioBordesa.service';
  import {SerigrafiaPrecioBordesa} from './serigrafiaPrecioBordesa';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'serigrafia-preciobordesa',
      providers: [SerigrafiaPrecioBordesaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/serigrafia.config.precioBordesa.html"
         
  })
  export class SerigrafiaPrecioBordesaComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:SerigrafiaPrecioBordesa;
    public precio: Array < SerigrafiaPrecioBordesa > ;
    constructor(private  _bordadoService: SerigrafiaPrecioBordesaService) {
    }
  
    ngOnInit() {
     this. precios = new SerigrafiaPrecioBordesa();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.precios = new SerigrafiaPrecioBordesa();
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
  
  