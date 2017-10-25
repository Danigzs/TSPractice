import {
    Component,
    OnInit,
    Input,
    ElementRef,
    ViewChild,
    ViewContainerRef
  } from '@angular/core';
  import {Observable} from 'rxjs/Observable';
  
  import {TecnicaService} from '../producto/tecnica.service';
  import {Tecnica} from '../producto/tecnica';
  
  import {VinilTipo} from '../tecnicas config/vinilTipo';
  import {Ubicaciones} from './../tecnicas config/ubicaciones';
  import {Vinil} from '../tecnicas/vinil';
  import {VinilSize} from '../tecnicas config/vinilSize';
  
  import {UbicacionesService} from './../tecnicas config/ubicaciones.service';
  import {VinilService} from '../tecnicas/vinil.service';
  import {VinilSizeService} from '../tecnicas config/vinilSize.service';
  import {VinilPrecioService} from '../tecnicas config/vinilPrecio.service';
  import {VinilPrecioMaquilaService} from '../tecnicas config/vinilPrecioMaquila.service';
  import {VinilTipoService} from '../tecnicas config/vinilTipo.service';
  
  @Component({
    selector: 'tecnicavinil',
      providers: [TecnicaService,VinilTipoService,VinilPrecioMaquilaService,UbicacionesService,VinilService,VinilSizeService,VinilPrecioService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas/tecnica.vinil.html"
         
  })
  export class TecnicaVinilComponent  {
  
    public tecnica:Tecnica;
    public tecnicas: Array < Tecnica > ;

    public vinil: Vinil;
    public viniles:Array<Vinil>;
    public vinilSizes:Array<VinilSize>;
    public vinilTypes:Array<VinilTipo>;
    public vinilUbications:Array<Ubicaciones>;

    vinilSizeSelected = new VinilSize;
    vinilUbicationSelected = new Ubicaciones;
    vinilTypeSelected = new VinilTipo;
    @Input() OnAddVinil:Function;

    constructor(private  _tecnicaService: TecnicaService,
                private _vinilUbicationsService: UbicacionesService,
                private _vinilSizeService: VinilSizeService,
                private _vinilTypeService: VinilTipoService,
                private _vinilPrecioService: VinilPrecioService,
                private _vinilPrecioMaquilaservice: VinilPrecioMaquilaService ) {
    }
  
    ngOnInit() {
    this.vinil = new Vinil();
    this.vinilUbicationSelected = new Ubicaciones;
    this.vinilSizeSelected = new VinilSize;
    this.vinilTypeSelected = new VinilTipo;
    this.getVinil().then(res =>{
      
      if (this.vinilTypes.length > 0)
      {
        this.vinilTypeSelected = this.vinilTypes[0];
      }

      if (this.vinilSizes.length > 0)
      {
        this.vinilSizeSelected = this.vinilSizes[0];
      }
      if(this.vinilUbications.length > 0 )
      {
        this.vinilUbicationSelected = this.vinilUbications[0];
      }
    });

    }
  
    getVinilValue()  {
      if(this.vinil.quantity > 0 )
    {
      if(this.vinil.wItem == false){
        this._vinilPrecioService.getVinilPrecio(this.vinil.quantity).subscribe(
          data => {
            if(data.length > 0)
            {
              this.vinil.price = data[0].costo;
            }
            else {
              this.vinil.price = 0;
            }
          });
      }
      else 
      {
        this._vinilPrecioMaquilaservice.getVinilPrecioMaquila(this.vinil.quantity).subscribe(
          data => {
            if(data.length > 0)
            {
                this.vinil.price = data[0].costo ;
            }
            else {
              this.vinil.price = 0;
            }
          });
      }
    }
   }
    getVinil(): Promise < boolean > {
      return new Promise < boolean > ((resolve, reject) => {
   
        Observable.forkJoin(
          this._vinilTypeService.getTecnicas(),
          this._vinilUbicationsService.getTecnicas(),
          this._vinilSizeService.getTecnicas(),
          ).subscribe(
          results => {
            this.vinilTypes = results[0]
            this.vinilUbications = results[1];
            this.vinilSizes = results[2];
            resolve(true)
          }
          );
        });
    }
    addVinil()
    {
      if(this.vinil.price > 0)
      {
        this.vinil.percentageSize = this.vinilSizeSelected.costo;
        this.vinil.percentageType = this.vinilTypeSelected.costo;
        this.vinil.nombre = this.vinilTypeSelected.nombre;
        this.vinil.position = this.vinilUbicationSelected.ubicaciones;
        this.vinil.size = this.vinilSizeSelected.size;
        this.OnAddVinil(this.vinil);
      }
    }
  
  }