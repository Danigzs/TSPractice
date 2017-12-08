import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,    
    ViewContainerRef
  } from '@angular/core';
  import {SerigrafiaSizeService} from './serigrafiaSize.service';
  import {SerigrafiaSize} from './serigrafiaSize';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  @Component({
    selector: 'serigrafia-size',
      providers: [SerigrafiaSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/serigrafia.config.size.html"
         
  })
  export class SerigrafiaTamañoComponent  {
    @Input() appConfig:  AppConfig  ;    
    public serigrafiasize:SerigrafiaSize;
    public serigrafias: Array < SerigrafiaSize > ;
    public isEditing:Boolean;    
    constructor(private  _bordadoService: SerigrafiaSizeService) {
    }
  
    ngOnInit() {
      this.isEditing = false;
      
     this. serigrafiasize = new SerigrafiaSize();
     this.reloadTecnicas();
    }

    setEditMode(edit:boolean,bordado:SerigrafiaSize){
      this.isEditing = edit;
      if(edit){
        this.serigrafiasize._id = bordado._id;
        this.serigrafiasize.costo = bordado.costo;
        this.serigrafiasize.size = bordado.size;
      }
      else {
        this.serigrafiasize._id = 0;
        this.serigrafiasize.costo = 0;
        this.serigrafiasize.size = "";
      }
    }
  
    reloadTecnicas(){
        this.serigrafiasize = new SerigrafiaSize();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.serigrafias = data;
       }
     )
    }
    agregarTecnica(){
      if(this.isEditing){
        this.edit(this.serigrafiasize);
      }
      else {
      this._bordadoService.addTecnica(this.serigrafiasize).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.serigrafiasize).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }

      edit(_serigrafiasize:SerigrafiaSize){
        this._bordadoService.update(_serigrafiasize).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }
      delete(_serigrafiasize:SerigrafiaSize, index:number){
        this._bordadoService.delete(_serigrafiasize).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
        
      }
  }
  
  