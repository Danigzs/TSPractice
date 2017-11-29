import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SublimadoSizeService} from './sublimadoSize.service';
  import {SublimadoSize} from './sublimadoSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'sublimado-size',
      providers: [SublimadoSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/sublimado.config.size.html"
         
  })
  export class SublimadoSizeComponent  {
    @Input() appConfig:  AppConfig  ;    
    public sublimadosize:SublimadoSize;
    public sublimados: Array < SublimadoSize > ;
    constructor(private  _bordadoService: SublimadoSizeService) {
    }
  
    ngOnInit() {
     this. sublimadosize = new SublimadoSize();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.sublimadosize = new SublimadoSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.sublimados = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.sublimadosize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.sublimadosize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  