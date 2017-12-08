import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,    
  ViewContainerRef
} from '@angular/core';
import {SublimadoPrecioMaquilaService} from './sublimadoPrecioMaquila.service';
import {SublimadoPrecioMaquila} from './sublimadoPrecioMaquila';
import {AppConfig} from './../appConfig/appConfig';



@Component({
  selector: 'sublimado-preciomaquila',
  providers: [SublimadoPrecioMaquilaService],
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas_config/sublimado.config.preciomaquila.html"

})
export class SublimadoPrecioMaquilaComponent  {
  @Input() appConfig:  AppConfig;
  public precios:SublimadoPrecioMaquila;
  public precio: Array < SublimadoPrecioMaquila > ;
  public isEditing:Boolean;  
  constructor(private  _sublimadoPrecioMaquilaService: SublimadoPrecioMaquilaService) {
  }
  
  ngOnInit() {
    this.isEditing = false;
    
    this.precios = new SublimadoPrecioMaquila();
    this.reloadTecnicas();
  }
  
  setEditMode(edit:boolean,bordado:SublimadoPrecioMaquila){
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
    this.precios = new SublimadoPrecioMaquila();
    this._sublimadoPrecioMaquilaService.getTecnicas().subscribe(
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
    this._sublimadoPrecioMaquilaService.addTecnica(this.precios).subscribe(
      data => {
        this.reloadTecnicas();

      }
      );
    }
  }
  updateTecnica()
  {
    this._sublimadoPrecioMaquilaService.addTecnica(this.precios).subscribe(
      data => {
        this.reloadTecnicas();
      }
      );
  }
  edit(_sublimadopreciomaquila:SublimadoPrecioMaquila){
    this._sublimadoPrecioMaquilaService.update(_sublimadopreciomaquila).subscribe(
      data => {
        this.setEditMode(false,null);
        this.reloadTecnicas();
      }
    );
  }
  delete(_sublimadopreciomaquila:SublimadoPrecioMaquila, index:number){
    this._sublimadoPrecioMaquilaService.delete(_sublimadopreciomaquila).subscribe(
      data => {
        this.reloadTecnicas();
      }
    );
    
  }
}

