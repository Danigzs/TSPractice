import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SerigrafiaPrecioBordesaService} from './serigrafia.precioBordesa.service';
  import {SerigrafiaPrecioBordesa} from './serigrafiaPrecioBordesa';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'serigrafia-preciobordesa',
      providers: [SerigrafiaPrecioBordesaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/serigrafia.config.precioBordesa.html"
         
  })
  export class SerigrafiaPrecioBordesaComponent  {
    @Input() appConfig:  AppConfig  ;    
    public precios:SerigrafiaPrecioBordesa;
    public precio: Array < SerigrafiaPrecioBordesa > ;
    public isEditing:Boolean;
    constructor(private  _bordadoService: SerigrafiaPrecioBordesaService) {
    }
  
    ngOnInit() {
      this.isEditing = false;
      
     this. precios = new SerigrafiaPrecioBordesa();
     this.reloadTecnicas();
    }

    setEditMode(edit:boolean,bordado:SerigrafiaPrecioBordesa){
      this.isEditing = edit;
      if(edit){
        this.precios._id = bordado._id;
        this.precios.costo = bordado.costo;
        this.precios.tintas = bordado.tintas;
        this.precios.prendaDe = bordado.prendaDe;
        this.precios.prendaHasta = bordado.prendaHasta;
        
      }
      else {
        this.precios._id = 0;
        this.precios.costo = 0;
        this.precios.tintas = 0;
        this.precios.prendaDe = 0;
        this.precios.prendaHasta = 0;
       
      }
    }
  
    reloadTecnicas(){
        this.precios = new SerigrafiaPrecioBordesa();
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
      edit(_serigrafiaPrecioBordesa:SerigrafiaPrecioBordesa){
        this._bordadoService.update(_serigrafiaPrecioBordesa).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_serigrafiaPrecioBordesa:SerigrafiaPrecioBordesa, index:number){
        this._bordadoService.delete(_serigrafiaPrecioBordesa).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }

  }