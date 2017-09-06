import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,
    ViewContainerRef
  } from '@angular/core';
  import {BordadoTipoService} from './BordadoTipo.service';
  import {BordadoTipo} from './BordadoTipo';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  @Component({
    selector: 'bordado-tipo',
      providers: [BordadoTipoService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/bordado.config.tipo.html"
         
  })
  export class BordadoTipoComponent  {
    @Input() appConfig:  AppConfig  ;
    public bordadotipo:BordadoTipo;
    public bordados: Array < BordadoTipo > ;
    constructor(private  _bordadoService: BordadoTipoService) {
    }
  
    ngOnInit() {
     this. bordadotipo = new BordadoTipo();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.bordadotipo = new BordadoTipo();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.bordados = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.bordadotipo).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.bordadotipo).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  