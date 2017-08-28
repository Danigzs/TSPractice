import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    ViewContainerRef
  } from '@angular/core';
  import {BordadoService} from './../tecnicas/bordado.service';
  import {Bordado} from './../tecnicas/bordado';
  
  
  
  @Component({
    selector: 'bordado-size',
      providers: [BordadoService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/bordado.config.size.html"
         
  })
  export class BordadoTamañoComponent  {
    public bordado:Bordado;
    public bordados: Array < Bordado > ;
    constructor(private  _bordadoService: BordadoService) {
    }
  
    ngOnInit() {
     this. bordado = new Bordado();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.bordado = new Bordado();
        this._bordadoService.getTecnicas().subscribe(
       data => {
         this.bordados = data;
       }
     )
    }
    agregarTecnica(){
      
      this._bordadoService.addTecnica(this.bordado).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._bordadoService.addTecnica(this.bordado).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  }
  
  