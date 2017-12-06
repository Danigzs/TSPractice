import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,
    ViewContainerRef
  } from '@angular/core';
  import {ColoresService} from './colores.service';
  import {Colores} from './colores';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  
  @Component({
    selector: 'bordado-colores',
      providers: [ColoresService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/bordado.config.colores.html"
         
  })
  export class ColoresComponent  {
    @Input() appConfig:  AppConfig ;   
    public colores:Colores;
    public color: Array < Colores > ;
    public isEditing:Boolean;    
    cantidad = 1000;
    constructor(private  _tecnicaService: ColoresService) {
    }
  

    ngOnInit() {
      this.isEditing = false;
      
     this.colores = new Colores();
     this.reloadTecnicas();
    }

    setEditMode(edit:boolean,bordado:Colores){
      this.isEditing = edit;
      if(edit){
        this.colores._id = bordado._id;
        this.colores.color = bordado.color;
        this.colores.hilo = bordado.hilo;
        this.colores.marca = bordado.marca;
        
      }
      else {
        this.colores._id = 0;
        this.colores.color = 0;
        this.colores.hilo = "";
        this.colores.marca = "";
      }
    }
  
    reloadTecnicas(){
        this.colores = new Colores();
        this._tecnicaService.getTecnicas().subscribe(
       data => {
         this.color = data;
       }
     )
    }
    agregarTecnica(){
      if(this.colores.color != 0 && this.colores.hilo.length > 0 && this.colores.marca.length > 0){

      
        if(this.isEditing){
          this.edit(this.colores);
        }
        else{
      this._tecnicaService.addTecnica(this.colores).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
      }
     else 
      {
        alert("Favor de llenar todos los campos.")
      }
    }
    updateTecnica()
      {
         this._tecnicaService.addTecnica(this.colores).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
      edit(_colores:Colores){
        this._tecnicaService.update(_colores).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_colores:Colores, index:number){
        this._tecnicaService.delete(_colores).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
      }
  
  }