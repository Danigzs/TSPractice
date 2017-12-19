import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {VinilPrecioMaquilaService} from './vinilPrecioMaquila.service';
  import {VinilPrecioMaquila} from './vinilPrecioMaquila';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'vinil-preciomaquila',
      providers: [VinilPrecioMaquilaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/vinil.config.precioMaquila.html"
         
  })
  export class VinilPrecioMaquilaComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:VinilPrecioMaquila;
    public precio: Array < VinilPrecioMaquila > ;
    public isEditing:Boolean;


    constructor(private  _bordadoService: VinilPrecioMaquilaService) {
    }
  
    ngOnInit() {
     this. precios = new VinilPrecioMaquila();
     this.isEditing = false;
     this.reloadTecnicas();
    }
  
    setEditMode(edit:boolean,bordado:VinilPrecioMaquila){
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
        this.precios = new VinilPrecioMaquila();
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

      edit(_vinilpreciomaquila:VinilPrecioMaquila){
        this._bordadoService.update(_vinilpreciomaquila).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_vinilpreciomaquila:VinilPrecioMaquila, index:number){
        this._bordadoService.delete(_vinilpreciomaquila).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }
  }
  
  