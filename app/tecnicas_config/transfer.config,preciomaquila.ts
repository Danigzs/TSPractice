import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {TransferPrecioMaquilaService} from './transferPrecioMaquila.service';
  import {TransferPrecioMaquila} from './transferPrecioMaquila';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'transfer-precioMaquila',
      providers: [TransferPrecioMaquilaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/transfer.config.preciomaquila.html"
         
  })
  export class TransferPrecioMaquilaComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:TransferPrecioMaquila;
    public precio: Array < TransferPrecioMaquila > ;
    public isEditing:Boolean;

    constructor(private  _bordadoService: TransferPrecioMaquilaService) {
    }
  
    ngOnInit() {
     this.isEditing = false;          
     this. precios = new TransferPrecioMaquila();
     this.reloadTecnicas();
    }
  
    setEditMode(edit:boolean,bordado:TransferPrecioMaquila){
      this.isEditing = edit;
      if(edit){
        this.precios._id = bordado._id;
        this.precios.costo = bordado.costo;
        this.precios.prendaDe = bordado.prendaDe;
        this.precios.prendaHasta = bordado.prendaHasta;
      }
      else {
        this.precios._id = 0;
        this.precios.costo = 0;
        this.precios.prendaDe = 0;
        this.precios.prendaHasta = 0;
      
      }
    }
    
    reloadTecnicas(){
        this.precios = new TransferPrecioMaquila();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.precio = data;
       }
     )
    }
    agregarTecnica(){
      if(this.isEditing){
        this.edit(this.precios);
      }
      else {
      this._bordadoService.addTecnica(this.precios).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
  }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.precios).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }

      edit(_transferpreciomaquila:TransferPrecioMaquila){
        this._bordadoService.update(_transferpreciomaquila).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_transferpreciomaquila:TransferPrecioMaquila, index:number){
        this._bordadoService.delete(_transferpreciomaquila).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }
  }
  
  