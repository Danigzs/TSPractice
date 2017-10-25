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

import {SublimadoService} from '../tecnicas/sublimado.service';
import {UbicacionesService} from './../tecnicas config/ubicaciones.service';
import {SublimadoSizeService} from '../tecnicas config/sublimadoSize.service';
import {SublimadoPrecioService} from '../tecnicas config/sublimadoPrecio.service';
import {SublimadoPrecioMaquilaService} from '../tecnicas config/sublimadoPrecioMaquila.service';

import {SublimadoSize} from '../tecnicas config/sublimadoSize';
import {Sublimado} from '../tecnicas/sublimado';
import {Ubicaciones} from './../tecnicas config/ubicaciones';
@Component({
  selector: 'tecnicasublimado',
    providers: [SublimadoSizeService,UbicacionesService,SublimadoPrecioService,SublimadoPrecioMaquilaService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnica.sublimado.html"
       
})
export class TecnicaSublimadoComponent  {

  public sublimado:Sublimado;
  public sublimados:Array<Sublimado>;
  public sublimadosSizes:Array<SublimadoSize>;
  public sublimadoUbications: Array <Ubicaciones>;

  sublimadoSizeSelected = new SublimadoSize;
  sublimadoUbicationSelected = new Ubicaciones;
    @Input() OnAddSublimado:Function;

  constructor(private _sublimadoUbicationsService: UbicacionesService,
              private _sublimadoSizeService:SublimadoSizeService,
              private _sublimadoPrecioService:SublimadoPrecioService,
              private _sublimadoPrecioMaquilaService:SublimadoPrecioMaquilaService) {
  }

  ngOnInit() {
   this.sublimado = new Sublimado();
   this.sublimadoUbicationSelected = new Ubicaciones;
   this.sublimadoSizeSelected = new SublimadoSize;
   this.getSublimados().then(res =>{
     if (this.sublimadosSizes.length > 0)
     {
       this.sublimadoSizeSelected = this.sublimadosSizes[0];
     }
     if(this.sublimadoUbications.length > 0 )
     {
       this.sublimadoUbicationSelected = this.sublimadoUbications[0];
     }
   });
  }
  getSublimadoValue()
  {
     if(this.sublimado.quantity > 0 )
   {
     if(this.sublimado.wItem == false){
       this._sublimadoPrecioService.getSublimadoPrecio(this.sublimado.quantity).subscribe(
         data => {
           if(data.length > 0)
           {
             this.sublimado.price = data[0].costo;
           }
           else {
             this.sublimado.price = 0;
           }
         });
     }
     else 
     {
       this._sublimadoPrecioMaquilaService.getSublimadoPrecioMaquila(this.sublimado.quantity).subscribe(
         data => {
           if(data.length > 0)
           {
               this.sublimado.price = data[0].costo ;
           }
           else {
             this.sublimado.price = 0;
           }
         });
     }
   }
  }
  getSublimados(): Promise < boolean > {
   return new Promise < boolean > ((resolve, reject) => {

     Observable.forkJoin(
       this._sublimadoUbicationsService.getTecnicas(),
       this._sublimadoSizeService.getTecnicas(),
       ).subscribe(
       results => {
         this.sublimadoUbications = results[0];
         this.sublimadosSizes = results[1];
         resolve(true)
       }
       );
     });
 }
  addSublimado(){
    if(this.sublimado.price > 0)
    {
      this.sublimado.position = this.sublimadoUbicationSelected.ubicaciones;
      this.sublimado.size = this.sublimadoSizeSelected.size;
      this.sublimado.percentageSize = this.sublimadoSizeSelected.costo;
       this.OnAddSublimado(this.sublimado);
    }
  }

}