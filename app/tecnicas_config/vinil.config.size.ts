import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {VinilSizeService} from './vinilSize.service';
  import {VinilSize} from './vinilSize';
  import {AppConfig} from './../appConfig/appConfig';
import { Vinil } from '../tecnicas/vinil';
  
  
  
  @Component({
    selector: 'vinil-size',
      providers: [VinilSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/vinil.config.size.html"
         
  })
  export class VinilSizeComponent  {
    @Input() appConfig:  AppConfig  ;    
    public vinilsize:VinilSize;
    public viniles: Array < VinilSize > ;
    public isEditing:Boolean;    
    constructor(private  _bordadoService: VinilSizeService) {
    }
  
    ngOnInit() {
     this.isEditing = false;
     this. vinilsize = new VinilSize();
     this.reloadTecnicas();
    }
  
    setEditMode(edit:boolean,vinil:VinilSize){
      this.isEditing = edit;
      if(edit){
        this.vinilsize._id = vinil._id;
        this.vinilsize.costo = vinil.costo;
        this.vinilsize.size = vinil.size;
      }
      else {
        this.vinilsize._id = 0;
        this.vinilsize.costo = 0;
        this.vinilsize.size = "";
      }
    }

    reloadTecnicas(){
        this.vinilsize = new VinilSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.viniles = data;
       }
     )
    }
    agregarTecnica(){
      if(this.vinilsize.size.length > 0){
        
              if(this.isEditing){
                this.edit(this.vinilsize);
              }
              else {
      
      this._bordadoService.addTecnica(this.vinilsize).subscribe(
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
         this._bordadoService.addTecnica(this.vinilsize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
      edit(_vinilsize:VinilSize){
        this._bordadoService.update(_vinilsize).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_vinilsize:VinilSize, index:number){
        this._bordadoService.delete(_vinilsize).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }

  }
  
  