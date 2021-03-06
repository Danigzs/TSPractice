
import { Component, OnInit, ElementRef} from '@angular/core';
import { AppConfig } from '../appConfig/appConfig'
import { AppConfigService } from '../appConfig/appConfig.service'
@Component({
  selector: 'vinil-main',
  providers: [AppConfigService],  
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas_config/vinil.mainscreen.html"
})
export class VinilMainComponent  implements OnInit {
    appConfig:AppConfig
    
    constructor(private  _appConfigService: AppConfigService) {
      
        }
      
    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.appConfig = new AppConfig();
      this.getAppConfig();
    }


    getAppConfig(){
      this._appConfigService.getAppConfig().subscribe(
            appConfig => {
              
              this.appConfig = appConfig;
              
            }
         );
        }

  }
