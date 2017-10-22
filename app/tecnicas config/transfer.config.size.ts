import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {TransferSizeService} from './transferSize.service';
  import {TransferSize} from './transferSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'transfer-size',
      providers: [TransferSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/transfer.config.size.html"
         
  })
  export class TransferSizeComponent  {
    @Input() appConfig:  AppConfig  ;    
    public transfersize:TransferSize;
    public transfers: Array < TransferSize > ;
    constructor(private  _bordadoService: TransferSizeService) {
    }
  
    ngOnInit() {
     this. transfersize = new TransferSize();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.transfersize = new TransferSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.transfers = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.transfersize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.transfersize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  