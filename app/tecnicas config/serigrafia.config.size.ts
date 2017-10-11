import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {BordadoSizeService} from './BordadoSize.service';
  import {BordadoSize} from './BordadoSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'serigrafia-size',
      providers: [BordadoSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/bordado.config.size.html"
         
  })
  export class SerigrafiaTamañoComponent  {
    @Input() appConfig:  AppConfig  ;    
    public bordadosize:BordadoSize;
    public bordados: Array < BordadoSize > ;
    constructor(private  _bordadoService: BordadoSizeService) {
    }
  
    ngOnInit() {
     this. bordadosize = new BordadoSize();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.bordadosize = new BordadoSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.bordados = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.bordadosize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.bordadosize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  