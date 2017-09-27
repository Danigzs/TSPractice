import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ViewContainerRef
} from '@angular/core';
import {BordadoService} from './bordado.service';
import {BordadoTipoComponent} from './../tecnicas config/bordado.config.tipo'
/**
 * Config bordados  - Models
 */
 import {BordadoTipo} from './../tecnicas config/BordadoTipo';
 import {BordadoPuntadas} from './../tecnicas config/BordadoPuntadas';
 import {BordadoSize} from './../tecnicas config/BordadoSize';
 import {Posiciones} from './../tecnicas config/posiciones';
 import {AppConfig} from './../appConfig/appConfig';
 import {Colores} from './../tecnicas config/colores';

/**
 * Config bordados - Services
 */
 import {BordadoTipoService} from './../tecnicas config/BordadoTipo.service';
 import {BordadoPuntadasService} from './../tecnicas config/BordadoPuntadas.service';
 import {BordadoSizeService} from './../tecnicas config/BordadoSize.service';
 import {PosicionesService} from './../tecnicas config/posiciones.service';
 import {AppConfigService} from './../appConfig/appConfig.service';
 import {ColoresService} from './../tecnicas config/colores.service';


 import {Bordado} from './bordado';



 @Component({
   selector: 'tecnicabordado',
   providers: [ColoresService, AppConfigService,BordadoService,BordadoSizeService,BordadoPuntadasService,BordadoTipoService,PosicionesService],
   styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
   templateUrl: "./app/tecnicas/tecnica.bordado.html"

 })
 export class TecnicaBordadoComponent  implements OnInit {
    
   @Input() OnAddBordadoTecnica:Function;


   public bordado:Bordado;
   public bordados: Array < Bordado > ;

  /**
   * Bordados config
   */
   public bordadoTypes: Array <BordadoTipo>;
   public bordadoStitches: Array <BordadoPuntadas>;
   public bordadoSizes: Array <BordadoSize>;
   public bordadoPositions: Array <Posiciones>;
   public bordadoColores:Array<Colores>;



  /**
   * Config bordado
   */

   bordadoTypeSelected = new BordadoTipo;  
   bordadoStitchSelected = new BordadoPuntadas;
   bordadoSizeSelected = new BordadoSize;
   bordadoPositionSelected = new Posiciones;
   appConfigSelected = new AppConfig;
   appConfig = new AppConfig;
   bordadoColoresSelected = new Colores;

   bordadotipoSelected = new BordadoTipo;
   constructor(
     private _bordadoTypeService:BordadoTipoService,
     private _bordadoStitchService: BordadoPuntadasService,
     private _bordadoSizeService: BordadoSizeService,
     private _bordadoPositionService: PosicionesService,
     private _appConfigService: AppConfigService,
     private _coloresService: ColoresService,
     ) {
   }

   ngOnInit() {
     this.bordado = new Bordado();
     this.bordadoTypeSelected = new BordadoTipo();
     this.bordadoSizeSelected = new BordadoSize();
     this.bordadoPositionSelected = new Posiciones();
     this.bordadoStitchSelected= new BordadoPuntadas();
     this.appConfigSelected = new AppConfig();
     this.bordadoColoresSelected = new Colores();
     this.bordado.cantidad = 1;

     this.bordado.bType = this.bordadoTypeSelected;
     this.bordado.bSize = this.bordadoSizeSelected;
     this.bordado.bPosition = this.bordadoPositionSelected;
     this.bordado.bStitches = this.bordadoStitchSelected;
     this.bordado.bColores = this.bordadoColoresSelected;
     this.bordado.calculateBordadoPrice();
     this.getBordadosData().then(res =>{
       if (this.bordadoTypes.length > 0)
       {
         this.bordadoTypeSelected = this.bordadoTypes[0];
       }
       if (this.bordadoSizes.length > 0){ 
         this.bordadoSizeSelected = this.bordadoSizes[0];
       }
       if (this.bordadoPositions.length > 0)
       { 
         this.bordadoPositionSelected = this.bordadoPositions[0];
       }
       if (this.bordadoColores.length > 0)
       { 
         this.bordadoColoresSelected = this.bordadoColores[0];
       }


       if (this.bordadoStitches.length > 0)    
         this.bordadoStitchSelected = this.bordadoStitches[0];

       this.bordado.bType = this.bordadoTypeSelected;
     this.bordado.bSize = this.bordadoSizeSelected;
     this.bordado.bPosition = this.bordadoPositionSelected;
     this.bordado.bStitches = this.bordadoStitchSelected;
     this.bordado.bColores = this.bordadoColoresSelected;

       this.bordado.calculateBordadoPrice();

     })
   }
   selectBordadoType(event:Event){
     this.bordado.bType = this.bordadoTypeSelected;
     this.bordado.calculateBordadoPrice();
   }
   selectBordadoSize(event:Event){
     this.bordado.bSize = this.bordadoSizeSelected;
     this.bordado.calculateBordadoPrice();
   }
   selectBordadoPosition(event:Event){
     this.bordado.bPosition = this.bordadoPositionSelected;
     this.bordado.calculateBordadoPrice();
   }
   selectAppConfig(event:Event){
   }
   selectBordadoStitch(event:Event){

   }
   selectBordadoColores(event:Event){
     
   }


   addBordadoTecnica(){
     
     this.bordado.bType = this.bordadoTypeSelected;
     this.bordado.bPosition = this.bordadoPositionSelected;
     this.bordado.bStitches = this.bordadoStitchSelected;
     this.bordado.bSize = this.bordadoSizeSelected;
     this.bordado.bColores = this.bordadoColoresSelected;
     this.bordado.calculateBordadoPrice();
     this.OnAddBordadoTecnica(this.bordado);
   }



   getBordadosData(): Promise < boolean > {
     return new Promise < boolean > ((resolve, reject) => {

       Observable.forkJoin(
         this._bordadoTypeService.getTecnicas(),
         this._bordadoSizeService.getTecnicas(),
         this._bordadoStitchService.getTecnicas(),
         this._bordadoPositionService.getTecnicas(),
         this._appConfigService.getAppConfig(),
         this._coloresService.getTecnicas(),

         ).subscribe(
         results => {

           this.bordadoTypes = results[0];
           this.bordadoSizes  = results[1];
           this.bordadoStitches  = results[2];
           this.bordadoPositions  = results[3];
           this.appConfig = results[4];
           this.bordadoColores = results[5];


           resolve(true)
         }
         );
       });
   }



 }

