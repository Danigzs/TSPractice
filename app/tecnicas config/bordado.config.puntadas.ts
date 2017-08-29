import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    ViewContainerRef
  } from '@angular/core';
  import {TecnicaService} from '../producto/tecnica.service';
  import {Tecnica} from '../producto/tecnica';
  
  
  
  @Component({
    selector: 'bordado-puntadas',
      providers: [TecnicaService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/bordado.config.puntadas.html"
         
  })
  export class BordadoPuntadasComponent  {
  
    public tecnica:Tecnica;
    public tecnicas: Array < Tecnica > ;
    constructor(private  _tecnicaService: TecnicaService) {
    }
  
    ngOnInit() {
     this.tecnica = new Tecnica();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.tecnica = new Tecnica();
        this._tecnicaService.getTecnicas().subscribe(
       data => {
         this.tecnicas = data;
       }
     )
    }
    agregarTecnica(){
      
      this._tecnicaService.addTecnica(this.tecnica).subscribe(
        data => {
      this.reloadTecnicas();
  
        }
      );
    }
    updateTecnica()
      {
         this._tecnicaService.addTecnica(this.tecnica).subscribe(
        data => {
          this.reloadTecnicas();
        }
      );
      }
  
  }