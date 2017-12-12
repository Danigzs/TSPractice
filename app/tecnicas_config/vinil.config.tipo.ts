import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,
    ViewContainerRef
  } from '@angular/core';
  import {VinilTipoService} from './vinilTipo.service';
  import {VinilTipo} from './vinilTipo';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  @Component({
    selector: 'vinil-tipo',
      providers: [VinilTipoService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/vinil.config.tipo.html"
         
  })
  export class VinilTipoComponent  {
    @Input() appConfig:  AppConfig  ;
    public viniltipo:VinilTipo;
    public viniles: Array < VinilTipo > ;
    public isEditing:Boolean;
    
    constructor(private  _vinilService: VinilTipoService) {
    }
  
    ngOnInit() {
      this.isEditing = false;      
     this. viniltipo = new VinilTipo();
     this.reloadTecnicas();
    }

    setEditMode(edit:boolean,bordado:VinilTipo){
      this.isEditing = edit;
      if(edit){
        this.viniltipo._id = bordado._id;
        this.viniltipo.costo = bordado.costo;
        this.viniltipo.nombre = bordado.nombre;
      }
      else {
        this.viniltipo._id = 0;
        this.viniltipo.costo = 0;
        this.viniltipo.nombre = "";
      }
    }
  
    reloadTecnicas(){
        this.viniltipo = new VinilTipo();
        this._vinilService.getTecnicas().subscribe(
       data => {
         this.viniles = data;
       }
     )
    }
    agregarTecnica(){
      if(this.viniltipo.nombre.length > 0){
        
              if(this.isEditing){
                this.edit(this.viniltipo);
              }
              else {
      this._vinilService.addTecnica(this.viniltipo).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
  }
    }
    updateTecnica()
      {
         this._vinilService.addTecnica(this.viniltipo).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }

      edit(_vinilTipo:VinilTipo){
        this._vinilService.update(_vinilTipo).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_vinilTipo:VinilTipo, index:number){
        this._vinilService.delete(_vinilTipo).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }
  }
  
  