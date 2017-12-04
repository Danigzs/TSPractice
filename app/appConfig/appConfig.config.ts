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
import { debug } from 'util';
  
  
  
  @Component({
    selector: 'appconfig',
      providers: [AppConfigService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/appConfig/appConfig.html"
         
  })
  export class appConfigComponent  {
    @Input() appConfig:  AppConfig  ;    
    public posicion: AppConfig ;
    public posiciones: AppConfig ;
    constructor(private  _appConfigService: AppConfigService) {
    }
  
    ngOnInit() {
     this.posiciones = new AppConfig();
     this.posicion = new AppConfig();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.posiciones = new AppConfig();
        this._appConfigService.getAppConfig().subscribe(
       data => {
          this.posiciones = data;
          this.posicion.copy(data); 
       }
     )
    }
    agregarTecnica(){
        
        this._appConfigService.updateAppConfig(this.posicion).subscribe(
          data => {
        this.reloadTecnicas();
    
          }
        );
      }
    updateTecnica()
      {
         this._appConfigService.updateAppConfig(this.posicion).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }