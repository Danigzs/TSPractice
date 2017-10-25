import 'rxjs/add/observable/forkJoin'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
    Component,
    Input,
    OnInit,
    ElementRef,
    ViewChild,
    ViewContainerRef
  } from '@angular/core';
  import {Observable} from 'rxjs/Observable';
  
  import {TecnicaService} from '../producto/tecnica.service';
  import {Tecnica} from '../producto/tecnica';
  import {Transfer} from '../tecnicas/transfer';
  import {Ubicaciones} from './../tecnicas config/ubicaciones';
  import {TransferSize} from '../tecnicas config/transferSize';

  import {UbicacionesService} from './../tecnicas config/ubicaciones.service';
  import {TransferService} from '../tecnicas/transfer.service';
  import {TransferSizeService} from '../tecnicas config/transferSize.service';
  import {TransferPrecioService} from '../tecnicas config/transferPrecio.service';
  import {TransferPrecioMaquilaService} from '../tecnicas config/transferPrecioMaquila.service';
  
  
  
  
  
  @Component({
    selector: 'tecnicatransfer',
      providers: [TecnicaService,UbicacionesService,TransferService,TransferSizeService,TransferPrecioService,TransferPrecioMaquilaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas/tecnica.transfer.html"
         
  })
  export class TecnicaTransferComponent  {

    public transfer:Transfer;
    public transfers:Array<Transfer>;
    public transferSizes:Array<TransferSize>;
    public transferUbications:Array<Ubicaciones>;

    transferSizeSelected = new TransferSize;
    transferUbicationSelected = new Ubicaciones;
    @Input() OnAddTransfer:Function  
 
    constructor(private  _tecnicaService: TecnicaService,
                private _transferUbicationsService :UbicacionesService,
                private _transferSizeService: TransferSizeService,
                private _transferPrecioService:TransferPrecioService,
                private _transferPrecioMaquilaService:TransferPrecioMaquilaService) {
    }
  
    ngOnInit() {
     this.transfer = new Transfer();
     this.transferUbicationSelected = new Ubicaciones;
     this.transferSizeSelected = new TransferSize;
     this.getTransfer().then(res =>{
      
      if (this.transferSizes.length > 0)
      {
        this.transferSizeSelected = this.transferSizes[0];
      }
      if(this.transferUbications.length > 0 )
      {
        this.transferUbicationSelected = this.transferUbications[0];
      }
    });
    }
  
    getTransferValue()
    {
      if(this.transfer.quantity > 0 )
    {
      if(this.transfer.wItem == false){
        this._transferPrecioMaquilaService.getTransferPrecioMaquila(this.transfer.quantity).subscribe(
          data => {
            if(data.length > 0)
            {
              this.transfer.price = data[0].costo;
            }
            else {
              this.transfer.price = 0;
            }
          });
      }
      else 
      {
        this._transferPrecioService.getTransferPrecio(this.transfer.quantity).subscribe(
          data => {
            if(data.length > 0)
            {
                this.transfer.price = data[0].costo ;
            }
            else {
              this.transfer.price = 0;
            }
          });
      }
    }
   }
    getTransfer(): Promise < boolean > {
      return new Promise < boolean > ((resolve, reject) => {
   
        Observable.forkJoin(
          this._transferUbicationsService.getTecnicas(),
          this._transferSizeService.getTecnicas(),
          ).subscribe(
          results => {
            this.transferUbications = results[0];
            this.transferSizes = results[1];
            resolve(true)
          }
          );
        });
    }
    addTransfer(){
      if(this.transfer.price > 0)
      {

        this.transfer.position = this.transferUbicationSelected.ubicaciones;
        this.transfer.size = this.transferSizeSelected.size;
        this.transfer.percentageSize = this.transferSizeSelected.costo;
         this.OnAddTransfer(this.transfer);
      }
    }
  
  }