import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Input,
    ViewContainerRef
  } from '@angular/core';
  import {BordadoPuntadasService} from './BordadoPuntadas.service';
  import {BordadoPuntadas} from './BordadoPuntadas';
  import {AppConfig} from './../appConfig/appConfig';
  
  
  
  
  @Component({
    selector: 'bordado-puntadas',
      providers: [BordadoPuntadasService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas_config/bordado.config.puntadas.html"
         
  })
  export class BordadoPuntadasComponent  {
    @Input() appConfig:  AppConfig ;    
    public bordadopuntadas:BordadoPuntadas;
    public bordados: Array < BordadoPuntadas > ;
    public isEditing:Boolean;
    
    cantidad = 1000;
    constructor(private  _tecnicaService: BordadoPuntadasService) {
    }
  
    ngOnInit() {
     this.bordadopuntadas = new BordadoPuntadas();
     this.isEditing = false;
     
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.bordadopuntadas = new BordadoPuntadas();
        this._tecnicaService.getTecnicas().subscribe(
       data => {
         this.bordados = data;
       }
     )
    }
    agregarTecnica(){
      if(this.isEditing){
        this.edit(this.bordadopuntadas);
      }
      else{
      this._tecnicaService.addTecnica(this.bordadopuntadas).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
        
      );
    }
    }
    updateTecnica()
      {
         this._tecnicaService.addTecnica(this.bordadopuntadas).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }

      edit(_bordadoPuntadas:BordadoPuntadas){
        this._tecnicaService.update(_bordadoPuntadas).subscribe(
          data => {
            this.setEditMode(false,null);
            this.reloadTecnicas();
          }
        );
      }

      setEditMode(edit:boolean,bordado:BordadoPuntadas){
        this.isEditing = edit;
        if(edit){
          this.bordadopuntadas._id = bordado._id;
          this.bordadopuntadas.costo = bordado.costo;
        }
        else {
          this.bordadopuntadas._id = 0;
          this.bordadopuntadas.costo = 0;
        }
      }
      delete(_bordadoPuntadas:BordadoPuntadas, index:number){
        this._tecnicaService.delete(_bordadoPuntadas).subscribe(
          data => {
            this.reloadTecnicas();
          }
        );
      }
  
  }