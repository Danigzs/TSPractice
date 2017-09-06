import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    ViewContainerRef
  } from '@angular/core';
  import {BordadoSizeService} from './BordadoSize.service';
  import {BordadoSize} from './BordadoSize';
  
  
  
  @Component({
    selector: 'bordado-size',
      providers: [BordadoSizeService],
    styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
    templateUrl: "./app/tecnicas config/bordado.config.size.html"
         
  })
  export class BordadoTamañoComponent  {
    public bordado:BordadoSize;
    public bordados: Array < BordadoSize > ;
    constructor(private  _bordadoService: BordadoSizeService) {
    }
  
    ngOnInit() {
     this. bordado = new BordadoSize();
     this.reloadTecnicas();
    }
  
    reloadTecnicas(){
        this.bordado = new BordadoSize();
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
  
  