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

import {TecnicaService} from '../producto/tecnica.service';
import {Tecnica} from '../producto/tecnica';


import {SerigrafiaService} from './serigrafia.service';
import {Serigrafia} from './serigrafia';
/**
* Config serigrafia  - Services
*/

import {AppConfigService} from './../appConfig/appConfig.service';
import {UbicacionesService} from './../tecnicas config/ubicaciones.service';
import {SerigrafiaTipoTintaService} from './../tecnicas config/SerigrafiaTipoTinta.service';
import {SerigrafiaPrecioBordesaService} from './../tecnicas config/serigrafia.PrecioBordesa.service';
import {SerigrafiaPrecioClienteService} from './../tecnicas config/serigrafia.PrecioCliente.service';
import {SerigrafiaSizeService} from './../tecnicas config/serigrafiaSize.service';

/**
* Config serigrafia  - Models
*/
import {SerigrafiaTipoTinta} from './../tecnicas config/SerigrafiaTipoTinta';
import {Ubicaciones} from './../tecnicas config/ubicaciones';
import {SerigrafiaPrecioBordesa} from './../tecnicas config/serigrafiaPrecioBordesa';
import {SerigrafiaPrecioCliente} from './../tecnicas config/serigrafiaPrecioCliente';
import {SerigrafiaSize} from './../tecnicas config/serigrafiaSize';
import {AppConfig} from './../appConfig/appConfig';





@Component({
  selector: 'tecnicaserigrafia',
  providers: [AppConfigService,SerigrafiaPrecioClienteService,UbicacionesService,SerigrafiaTipoTintaService,SerigrafiaPrecioBordesaService,SerigrafiaSizeService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnica.serigrafia.html"

})
export class TecnicaSerigrafiaComponent  {  
  public tecnica:Tecnica;
  public serigrafia:Serigrafia;
  public tecnicas: Array < Tecnica > ;
  public serigrafias: Array<Serigrafia>;


  @Input() OnAddSerigrafia:Function;


/**
 * serigraph config
 */

 public serigrafiaInkTypes: Array <SerigrafiaTipoTinta>;
 public serigrafiaUbications: Array <Ubicaciones>;
 public serigrafiaSizes: Array <SerigrafiaSize>;
 public serigrafiaBordesaPrice: Array <SerigrafiaPrecioBordesa>;
 public serigrafiaClientePrice: Array <SerigrafiaPrecioCliente>;


/**
 * Config serigraph
 */

 serigrafiaInkTypeSelected = new SerigrafiaTipoTinta;
 serigrafiaUbicationSelected = new Ubicaciones;
 serigrafiaSizeSelected = new SerigrafiaSize;
 serigrafiaBordesaPriceSelected = new SerigrafiaPrecioBordesa;
 serigrafiaClientePriceSelected = new SerigrafiaPrecioCliente;

 constructor(private  _tecnicaService: TecnicaService,
   private _serigrafiaInkTypeService: SerigrafiaTipoTintaService,
   private _serigrafiaUbicationsService: UbicacionesService,
   private _serigrafiaSizeServie: SerigrafiaSizeService,
   private _serigrafiaBordesaPriceService: SerigrafiaPrecioBordesaService,
   private _serigrafiaClientePriceService: SerigrafiaPrecioClienteService,
   private _appConfigService: AppConfigService,

   ) {
 }

 ngOnInit() {
   this.tecnica = new Tecnica();
   this.serigrafia = new Serigrafia();
   this.reloadTecnicas();

   this.serigrafia = new Serigrafia
   this.serigrafiaInkTypeSelected = new SerigrafiaTipoTinta;
   this.serigrafiaUbicationSelected = new Ubicaciones;
   this.serigrafiaSizeSelected = new SerigrafiaSize;
   this.serigrafiaBordesaPriceSelected = new SerigrafiaPrecioBordesa;
   this.serigrafiaClientePriceSelected = new SerigrafiaPrecioCliente;
   this.getSerigrafiaData().then(res =>{
     if (this.serigrafiaInkTypes.length > 0)
     {
       this.serigrafiaInkTypeSelected = this.serigrafiaInkTypes[0];
     }
     
     if (this.serigrafiaUbications.length > 0){ 
       this.serigrafiaUbicationSelected= this.serigrafiaUbications[0];
     }
     if (this.serigrafiaSizes.length > 0){ 
       this.serigrafiaSizeSelected= this.serigrafiaSizes[0];
     }

     this.serigrafia.bInkType = this.serigrafiaInkTypeSelected;
     this.serigrafia.bUbications = this.serigrafiaUbicationSelected;
     this.serigrafia.bSize = this.serigrafiaSizeSelected;

   })

 }


 getSerigrafiaData(): Promise < boolean > {
   return new Promise < boolean > ((resolve, reject) => {

     Observable.forkJoin(
       this._serigrafiaInkTypeService.getTecnicas(),
       this._serigrafiaUbicationsService.getTecnicas(),
       this._serigrafiaSizeServie.getTecnicas(),
       this._appConfigService.getAppConfig()

       ).subscribe(
       results => {

         this.serigrafiaInkTypes = results[0];
         this.serigrafiaUbications  = results[1];
         this.serigrafiaSizes  = results[2];
         this.appConfig = results[3];


         resolve(true)
       }
       );
     });
 }
 getSerigrafiaValue()
 {
   if(this.serigrafia.quantity > 0 && this.serigrafia.tintas > 0 )
   {
     if(this.serigrafia.wItem == false){
       this._serigrafiaBordesaPriceService.getInkQuantity(this.serigrafia.tintas,this.serigrafia.quantity).subscribe(
         data => {
           if(data.length > 0)
           {
             this.serigrafia.price = data[0].costo;
           }
           else {
             this.serigrafia.price = 0;
           }
         });
     }
     else 
     {
       this._serigrafiaClientePriceService.getInkQuantityWItem(this.serigrafia.tintas,this.serigrafia.quantity).subscribe(
         data => {
           if(data.length > 0)
           {
             if(this.serigrafia.quantity >= 1 && this.serigrafia.quantity <= 60)
               this.serigrafia.price = data[0].costo + this.appConfig.presecado + this.appConfig.revelado;
             else 
               this.serigrafia.price = data[0].costo ;
           }
           else {
             this.serigrafia.price = 0;
           }
         });
     }
   }
 } 
 reloadTecnicas(){
   this.tecnica = new Tecnica();
   this._tecnicaService.getTecnicas().subscribe(
     data => {
         this.tecnicas = data;
       }
   )
 }
 agregarTecnica(){
   if(this.serigrafia.price > 0)
   {
     this.OnAddSerigrafia(this.serigrafia);
   }
   
 }
 updateTecnica()
 {
   this._tecnicaService.addTecnica(this.tecnica).subscribe(
     data => {
       this.reloadTecnicas();
     }
     );
 }
}