import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {AppConfigService} from './appConfig.service';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'appconfig',
      providers: [AppConfigService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/appConfig/appConfig.html"
         
  })
  export class appConfigComponent  {
    @Input() appConfig:  AppConfig  ;    
    public posiciones:AppConfig ;
    public posicion: Array <AppConfig> ;
    constructor(private  _bordadoService: AppConfigService) {
    }
  
    ngOnInit() {
     this. posiciones = new AppConfig();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.posiciones = new AppConfig();
        this._bordadoService.getAppConfig().subscribe(
       data => {
         this.posicion = data;
       }
     )
    }
    agregarTecnica(){
        
        this._bordadoService.updateAppConfig(this.posiciones).subscribe(
          data => {
        this.reloadTecnicas();
    
          }
        );
      }
    updateTecnica()
      {
         this._bordadoService.updateAppConfig(this.posiciones).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }