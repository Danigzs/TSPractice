import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SerigrafiaSizeService} from './serigrafiaSize.service';
  import {SerigrafiaSize} from './serigrafiaSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'serigrafia-size',
      providers: [SerigrafiaSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/serigrafia.config.size.html"
         
  })
  export class SerigrafiaTamañoComponent  {
    @Input() appConfig:  AppConfig  ;    
    public serigrafiasize:SerigrafiaSize;
    public serigrafias: Array < SerigrafiaSize > ;
    constructor(private  _bordadoService: SerigrafiaSizeService) {
    }
  
    ngOnInit() {
     this. serigrafiasize = new SerigrafiaSize();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.serigrafiasize = new SerigrafiaSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.serigrafias = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.serigrafiasize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.serigrafiasize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  