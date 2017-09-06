import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    ViewContainerRef
  } from '@angular/core';
  import {BordadoPuntadasService} from './BordadoPuntadas.service';
  import {BordadoPuntadas} from './BordadoPuntadas';
  
  
  
  @Component({
    selector: 'bordado-puntadas',
      providers: [BordadoPuntadasService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/bordado.config.puntadas.html"
         
  })
  export class BordadoPuntadasComponent  {
  
    public tecnica:BordadoPuntadas;
    public tecnicas: Array < BordadoPuntadas > ;
    constructor(private  _tecnicaService: BordadoPuntadasService) {
    }
  
    ngOnInit() {
     this.tecnica = new BordadoPuntadas();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.tecnica = new BordadoPuntadas();
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