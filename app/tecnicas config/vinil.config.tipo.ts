import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,
    ViewContainerRef
  } from '@angular/core';
  import {VinilTipoService} from './vinilTipo.service';
  import {VinilTipo} from './vinilTipo';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  @Component({
    selector: 'vinil-tipo',
      providers: [VinilTipoService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/vinil.config.tipo.html"
         
  })
  export class VinilTipoComponent  {
    @Input() appConfig:  AppConfig  ;
    public viniltipo:VinilTipo;
    public viniles: Array < VinilTipo > ;
    constructor(private  _vinilService: VinilTipoService) {
    }
  
    ngOnInit() {
     this. viniltipo = new VinilTipo();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.viniltipo = new VinilTipo();
        this._vinilService.getTecnicas().subscribe(
       data => {
         this.viniles = data;
       }
     )
    }
    agregarTecnica(){
      
      this._vinilService.addTecnica(this.viniltipo).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._vinilService.addTecnica(this.viniltipo).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  