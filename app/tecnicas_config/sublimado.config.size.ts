import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SublimadoSizeService} from './sublimadoSize.service';
  import {SublimadoSize} from './sublimadoSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'sublimado-size',
      providers: [SublimadoSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/sublimado.config.size.html"
         
  })
  export class SublimadoSizeComponent  {
    @Input() appConfig:  AppConfig  ;    
    public sublimadosize:SublimadoSize;
    public sublimados: Array < SublimadoSize > ;
    public isEditing:Boolean;    
    constructor(private  _bordadoService: SublimadoSizeService) {
    }
  
    ngOnInit() {
      this.isEditing = false;    
     this. sublimadosize = new SublimadoSize();
     this.reloadTecnicas();
    }

    setEditMode(edit:boolean,bordado:SublimadoSize){
      this.isEditing = edit;
      if(edit){
        this.sublimadosize._id = bordado._id;
        this.sublimadosize.costo = bordado.costo;
        this.sublimadosize.size = bordado.size;
      }
      else {
        this.sublimadosize._id = 0;
        this.sublimadosize.costo = 0;
        this.sublimadosize.size = "";
      }
    }
  
    reloadTecnicas(){
        this.sublimadosize = new SublimadoSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.sublimados = data;
       }
     )
    }
    agregarTecnica(){
      if(this.sublimadosize.size.length > 0){
        
              if(this.isEditing){
                this.edit(this.sublimadosize);
              }
              else{
      this._bordadoService.addTecnica(this.sublimadosize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
  }
  else 
  {
    alert("Favor de introducir un tamaño")
  }

    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.sublimadosize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
      edit(_sublimadosize:SublimadoSize){
        this._bordadoService.update(_sublimadosize).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_sublimadosize:SublimadoSize, index:number){
        this._bordadoService.delete(_sublimadosize).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }
  }
  
  