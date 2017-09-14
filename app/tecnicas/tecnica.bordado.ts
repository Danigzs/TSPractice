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

/**
 * Config bordados - Services
 */
import {BordadoTipoService} from './../tecnicas config/BordadoTipo.service';
import {BordadoPuntadasService} from './../tecnicas config/BordadoPuntadas.service';
import {BordadoSizeService} from './../tecnicas config/BordadoSize.service';
import {PosicionesService} from './../tecnicas config/posiciones.service';


import {Bordado} from './bordado';



@Component({
  selector: 'tecnicabordado',
    providers: [BordadoService,BordadoSizeService,BordadoPuntadasService,BordadoTipoService,PosicionesService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnica.bordado.html"
       
})
export class TecnicaBordadoComponent  implements OnInit {
  @Input() OnSelectBordadoType:Function ;
  @Input() OnSelectBordadoSize:Function ;
  @Input() OnSelectBordadoPosition:Function ;

  public bordado:Bordado;
  public bordados: Array < Bordado > ;

  /**
   * Bordados config
   */
  public bordadoTypes: Array <BordadoTipo>;
  public bordadoStitches: Array <BordadoPuntadas>;
  public bordadoSizes: Array <BordadoSize>;
  public bordadoPositions: Array <Posiciones>;


  /**
   * Config bordado
   */

  bordadoTypeSelected = new BordadoTipo;  
  bordadoStitchSelected = new BordadoPuntadas;
  bordadoSizeSelected = new BordadoSize;
  bordadoPositionSelected = new Posiciones;

  bordadotipoSelected = new BordadoTipo;
  constructor(
    private _bordadoTypeService:BordadoTipoService,
    private _bordadoStitchService: BordadoPuntadasService,
    private _bordadoSizeService: BordadoSizeService,
    private _bordadoPositionService: PosicionesService,) {
  }

  ngOnInit() {
   this. bordado = new Bordado();
   this.bordadoTypeSelected = new BordadoTipo();
   this.bordadoSizeSelected = new BordadoSize();
   this.bordadoPositionSelected = new Posiciones();
   this.bordadoStitchSelected= new BordadoPuntadas();
   this.getBordadosData().then(res =>{
    if (this.bordadoTypes.length > 0)
    {
      this.bordadoTypeSelected = this.bordadoTypes[0];
      this.OnSelectBordadoType(this.bordadoTypeSelected);
    }
    if (this.bordadoSizes.length > 0){ 
      this.bordadoSizeSelected = this.bordadoSizes[0];
      this.OnSelectBordadoSize(this.bordadoSizeSelected);
    }
    if (this.bordadoPositions.length > 0)
      { 
        this.bordadoPositionSelected = this.bordadoPositions[0];
        this.OnSelectBordadoPosition(this.bordadoPositionSelected);
      }
    if (this.bordadoStitches.length > 0)
      this.bordadoStitchSelected = this.bordadoStitches[0];

  
  })
  }
  selectBordadoType(event:Event){
      this.OnSelectBordadoType(this.bordadoTypeSelected)
  }
  selectBordadoSize(event:Event){
    this.OnSelectBordadoSize(this.bordadoSizeSelected)
  }
  selectBordadoPosition(event:Event){
    this.OnSelectBordadoPosition(this.bordadoPositionSelected)
}
selectBordadoStitch(event:Event){
  
}



  getBordadosData(): Promise < boolean > {
    return new Promise < boolean > ((resolve, reject) => {

      Observable.forkJoin(
        this._bordadoTypeService.getTecnicas(),
        this._bordadoSizeService.getTecnicas(),
        this._bordadoStitchService.getTecnicas(),
        this._bordadoPositionService.getTecnicas(),

      ).subscribe(
        results => {
          
          this.bordadoTypes = results[0];
          this.bordadoSizes  = results[1];
          this.bordadoStitches  = results[2];
          this.bordadoPositions  = results[3];
          


          resolve(true)
        }
      );
    });
  }
 
 
    
}

