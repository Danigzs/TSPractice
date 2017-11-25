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
    constructor(private  _appConfigService: AppConfigService) {
    }
  
    ngOnInit() {
     this. posiciones = new AppConfig();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.posiciones = new AppConfig();
        this._appConfigService.getAppConfig().subscribe(
       data => {
         this.posicion = data;
       }
     )
    }
    agregarTecnica(){
        
        this._appConfigService.updateAppConfig(this.posiciones).subscribe(
          data => {
        this.reloadTecnicas();
    
          }
        );
      }
    updateTecnica()
      {
         this._appConfigService.updateAppConfig(this.posiciones).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }