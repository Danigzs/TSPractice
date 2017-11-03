
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin'
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

 import { IMultiSelectOption,IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

 import {Bordado} from './bordado';


 /// Multiselect



 @Component({
   selector: 'tecnicabordado',
   providers: [ColoresService, AppConfigService,BordadoService,BordadoSizeService,BordadoPuntadasService,BordadoTipoService,PosicionesService],
   styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
   templateUrl: "./app/tecnicas/tecnica.bordado.html"

 })
 export class TecnicaBordadoComponent  implements OnInit {

   @Input() OnAddBordadoTecnica:Function;


   
   colorOptions: any[];
   // Text configuration
    multiConfig: IMultiSelectTexts = {
      checkAll: 'Seleccionar todos',
      uncheckAll: 'Deseleccionar todos',
      checked: 'color seleccionado',
      checkedPlural: 'colores seleccionados',
      searchPlaceholder: 'Buscar',
      searchEmptyResult: 'Vacío...',
      defaultTitle: 'Colores',
      allSelected: 'Todos seleccionados',
    };




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
   bordadoColoresSelected = new Array<Colores>();

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
     this.colorOptions = [ ];
     this.bordado = new Bordado();
     this.bordadoTypeSelected = new BordadoTipo();
     this.bordadoSizeSelected = new BordadoSize();
     this.bordadoPositionSelected = new Posiciones();
     this.bordadoStitchSelected= new BordadoPuntadas();
     this.appConfigSelected = new AppConfig();
     this.bordadoColoresSelected = new Array<Colores>();
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
         this.bordadoColoresSelected  = []
         this.bordadoColoresSelected.push(this.bordadoColores[0]);
       }


       if (this.bordadoStitches.length > 0)
         this.bordadoStitchSelected = this.bordadoStitches[0];

       this.bordado.bType = this.bordadoTypeSelected;
       this.bordado.bSize = this.bordadoSizeSelected;
       this.bordado.bPosition = this.bordadoPositionSelected;
       this.bordado.bStitches = this.bordadoStitchSelected;
       this.bordado.bColores = this.bordadoColoresSelected;

       this.colorOptions = this.bordadoColores.map((color,index) =>  ({id : color._id , name :color.color}));
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
     this.bordado.percentageSize = this.bordadoSizeSelected.costo;
     this.bordado.percentageType = this.bordadoTypeSelected.costo;
     this.bordado.percentagePosition = this.bordadoPositionSelected.costo;
     this.bordado.bColores = this.colorOptions.filter((item,index) => this.bordadoColoresSelected.indexOf(index) !== -1  ).map( item => item.name)
     this.bordado.costoTotal = this.bordado.price +  this.bordadoTypeSelected.costo + this.bordadoSizeSelected.costo +  this.bordadoPositionSelected.costo;
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

