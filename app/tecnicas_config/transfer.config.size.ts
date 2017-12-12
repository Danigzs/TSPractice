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
    templateUrl: "./app/tecnicas_config/transfer.config.size.html"
         
  })
  export class TransferSizeComponent  {
    @Input() appConfig:  AppConfig  ;    
    public transfersize:TransferSize;
    public transfers: Array < TransferSize > ;
    public isEditing:Boolean;
    constructor(private  _bordadoService: TransferSizeService) {
    }
  
    ngOnInit() {
      this.isEditing = false;      
     this. transfersize = new TransferSize();
     this.reloadTecnicas();
    }

    setEditMode(edit:boolean,bordado:TransferSize){
      this.isEditing = edit;
      if(edit){
        this.transfersize._id = bordado._id;
        this.transfersize.costo = bordado.costo;
        this.transfersize.size = bordado.size;
      }
      else {
        this.transfersize._id = 0;
        this.transfersize.costo = 0;
        this.transfersize.size = "";
      }
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
      if(this.transfersize.size.length > 0){
        
              if(this.isEditing){
                this.edit(this.transfersize);
              }
              else {
      this._bordadoService.addTecnica(this.transfersize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
  }
  else 
  {
    alert("Favor de introducir un nombre")
  }
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.transfersize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
      edit(_transfersize:TransferSize){
        this._bordadoService.update(_transfersize).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_transfersize:TransferSize, index:number){
        this._bordadoService.delete(_transfersize).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }
  }
  
  