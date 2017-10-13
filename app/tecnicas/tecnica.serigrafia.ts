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
    providers: [AppConfigService,SerigrafiaPrecioClienteService,UbicacionesService,SerigrafiaTipoTintaService,SerigrafiaPrecioBordesaService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnica.serigrafia.html"
       
})
export class TecnicaSerigrafiaComponent  {  
 public tecnica:Tecnica;
  public tecnicas: Array < Tecnica > ;

  public serigrafia:Serigrafia;
  public serigrafias: Array<Serigrafia>;
  

  @Input() OnAddSerigrafiaTecnica:Function;


/**
   * serigraph config
   */

  public serigrafiaInkTypes: Array <SerigrafiaTipoTinta>;
  public serigrafiaUbications: Array <Ubicaciones>;
  public serigrafiaBordesaPrice: Array <SerigrafiaPrecioBordesa>;
  public serigrafiaClientePrice: Array <SerigrafiaPrecioCliente>;

  /**
   * Config serigraph
   */

   serigrafiaInkTypeSelected = new SerigrafiaTipoTinta;
   serigrafiaUbicationSelected = new Ubicaciones;
   serigrafiaBordesaPriceSelected = new SerigrafiaPrecioBordesa;
   serigrafiaClientePriceSelected = new SerigrafiaPrecioCliente;
   serigrafiaSizeSelected = new SerigrafiaSize;

   constructor(private  _tecnicaService: TecnicaService,
    private _serigrafiaInkTypeService: SerigrafiaTipoTintaService,
    private _serigrafiaUbicationsService: UbicacionesService,
    private _serigrafiaBordesaPriceService: SerigrafiaPrecioBordesaService,
    private _serigrafiaClientePriceService: SerigrafiaPrecioClienteService,
  
  ) {
  }

  ngOnInit() {
   this.tecnica = new Tecnica();
   this.reloadTecnicas();

   this.serigrafia = new Serigrafia
   this.serigrafiaInkTypeSelected = new SerigrafiaTipoTinta;
   this.serigrafiaUbicationSelected = new Ubicaciones;
   this.serigrafiaBordesaPriceSelected = new SerigrafiaPrecioBordesa;
   this.serigrafiaClientePriceSelected = new SerigrafiaPrecioCliente;
   this.serigrafiaSizeSelected = new SerigrafiaSize;
   

   this.serigrafia.bInk = this.serigrafiaInkTypeSelected;
   this.serigrafia.bUbication = this.serigrafiaUbicationSelected;
   this.serigrafia.bBordesaPrice = this.serigrafiaBordesaPriceSelected;
   this.serigrafia.bClientePrice = this.serigrafiaClientePriceSelected;
   this.serigrafia.bSize = this.serigrafiaSizeSelected;
   this.serigrafia.calculateBordadoPrice();
   this.getSerigrafiaData().then(res=>{
     
   })

   
   
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
    
    this._tecnicaService.addTecnica(this.tecnica).subscribe(
      data => {
    this.reloadTecnicas();

      }
    );
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
