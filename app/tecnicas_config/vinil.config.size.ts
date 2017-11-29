import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {VinilSizeService} from './vinilSize.service';
  import {VinilSize} from './vinilSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'vinil-size',
      providers: [VinilSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/vinil.config.size.html"
         
  })
  export class VinilSizeComponent  {
    @Input() appConfig:  AppConfig  ;    
    public vinilsize:VinilSize;
    public viniles: Array < VinilSize > ;
    constructor(private  _bordadoService: VinilSizeService) {
    }
  
    ngOnInit() {
     this. vinilsize = new VinilSize();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.vinilsize = new VinilSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.viniles = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.vinilsize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.vinilsize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  