import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {BordadoSizeService} from './BordadoSize.service';
  import {BordadoSize} from './BordadoSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'bordado-size',
      providers: [BordadoSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/bordado.config.size.html"
         
  })
  export class BordadoTamañoComponent  {
    @Input() appConfig:  AppConfig  ;    
    public bordadosize:BordadoSize;
    public bordados: Array < BordadoSize > ;
    public isEditing:Boolean;
    
    constructor(private  _bordadoService: BordadoSizeService) {
    }
  
    ngOnInit() {
     this.isEditing = false;      
     this. bordadosize = new BordadoSize();
     this.reloadTecnicas();
    }

    setEditMode(edit:boolean,bordado:BordadoSize){
      this.isEditing = edit;
      if(edit){
        this.bordadosize._id = bordado._id;
        this.bordadosize.costo = bordado.costo;
        this.bordadosize.size = bordado.size;
      }
      else {
        this.bordadosize._id = 0;
        this.bordadosize.costo = 0;
        this.bordadosize.size = "";
      }
    }
  
    reloadTecnicas(){
        this.bordadosize = new BordadoSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.bordados = data;
       }
     )
    }
    agregarTecnica(){
      
      if(this.bordadosize.size.length > 0){
        if(this.isEditing){
          this.edit(this.bordadosize);
        }
        else{
        this._bordadoService.addTecnica(this.bordadosize).subscribe(
          data => {
        this.reloadTecnicas();
          
          }
        );
      }
     }
     else 
      {
        alert("Favor de introducir un Tamaño")
      }
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.bordadosize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
      edit(_bordadoSize:BordadoSize){
        this._bordadoService.update(_bordadoSize).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_bordadoSize:BordadoSize, index:number){
        this._bordadoService.delete(_bordadoSize).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
      }
  }
  
  