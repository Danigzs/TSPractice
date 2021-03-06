
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
import {BordadoTipoComponent} from './../tecnicas_config/bordado.config.tipo'
/**
 * Config bordados  - Models
 */
 import {BordadoTipo} from './../tecnicas_config/BordadoTipo';
 import {BordadoPuntadas} from './../tecnicas_config/BordadoPuntadas';
 import {BordadoSize} from './../tecnicas_config/BordadoSize';
 import {Posiciones} from './../tecnicas_config/posiciones';
 import {AppConfig} from './../appConfig/appConfig';
 import {Colores} from './../tecnicas_config/colores';

/**
 * Config bordados - Services
 */
 import {BordadoTipoService} from './../tecnicas_config/BordadoTipo.service';
 import {BordadoPuntadasService} from './../tecnicas_config/BordadoPuntadas.service';
 import {BordadoSizeService} from './../tecnicas_config/BordadoSize.service';
 import {PosicionesService} from './../tecnicas_config/posiciones.service';
 import {AppConfigService} from './../appConfig/appConfig.service';
 import {ColoresService} from './../tecnicas_config/colores.service';

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
     this.bordadoPrice.bind(this);
     this.bordadoSubtotal.bind(this);
     this.getBordadoPuntadasPrice.bind(this);
     this.bordadoCalculateAll.bind(this);


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

   selectMaquila(){
     this.bordadoCalculateAll();
   }

  bordadoCalculateAll(){
    this.bordadoSubtotal();
    this.bordadoPrice();
  }
  bordadoSubtotal(){
    if(this.bordado.maquila){
      return  this.getBordadoPuntadasPrice();
    }
    return this.bordadoTypeSelected.costo + this.bordadoSizeSelected.costo + this.bordadoPositionSelected.costo + this.getBordadoPuntadasPrice();
  }

   bordadoPrice(){
     if(this.bordado.maquila){
      return  this.getBordadoPuntadasPrice() * this.bordado.cantidad;
    }
     return ((this.bordadoTypeSelected.costo + this.bordadoSizeSelected.costo +  this.bordadoPositionSelected.costo + this.getBordadoPuntadasPrice())*(this.bordado.cantidad));
   }

   getBordadoPuntadasPrice(){
     if(this.bordado.maquila){
       if(this.bordado.puntadas ==0)
       {
         return this.appConfig.minBordado;      
       }
     
       var result = this.bordado.puntadas/1000;
       var resultCast = Math.floor(this.bordado.puntadas/1000)
       if(!Number.isInteger(result)){
         resultCast += 1
       }       
       
       var totalStitches = Math.floor(this.bordado.puntadas/1000);
       if(totalStitches > 0)
       {
         /* return totalStitches * this.bordadoStitchSelected.costo;*/
         var stitchesTotal = totalStitches*this.bordadoStitchSelected.costo;
         if(stitchesTotal<this.appConfig.minBordado){
           return this.appConfig.minBordado;}
          else{
            return stitchesTotal;
           }
           
         }
       
      if(this.bordadoStitchSelected.costo<this.appConfig.minBordado){
        return this.appConfig.minBordado;
      }
       return this.bordadoStitchSelected.costo;
       
     }
     else {
       return 0;
     }
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
     this.bordado.price = this.bordadoSubtotal();
     this.bordado.costoTotal = this.bordado.price ;
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