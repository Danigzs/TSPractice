import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,
    ViewContainerRef
  } from '@angular/core';
  import {BordadoPuntadasService} from './BordadoPuntadas.service';
  import {BordadoPuntadas} from './BordadoPuntadas';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  
  @Component({
    selector: 'bordado-puntadas',
      providers: [BordadoPuntadasService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/bordado.config.puntadas.html"
         
  })
  export class BordadoPuntadasComponent  {
    @Input() appConfig:  AppConfig ;    
    public bordadopuntadas:BordadoPuntadas;
    public bordados: Array < BordadoPuntadas > ;
    cantidad = 1000;
    constructor(private  _tecnicaService: BordadoPuntadasService) {
    }
  
    ngOnInit() {
     this.bordadopuntadas = new BordadoPuntadas();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.bordadopuntadas = new BordadoPuntadas();
        this._tecnicaService.getTecnicas().subscribe(
       data => {
         this.bordados = data;
       }
     )
    }
    agregarTecnica(){
      
      this._tecnicaService.addTecnica(this.bordadopuntadas).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._tecnicaService.addTecnica(this.bordadopuntadas).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  
  }