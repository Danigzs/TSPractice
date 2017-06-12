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
  selector: 'tecnicas',
    providers: [TecnicaService],
  styleUrls: ["./app/tecnicas/tecnicas.css"],
  templateUrl: "./app/tecnicas/tecnicas.html"
       
})
export class TecnicasComponent  {
  public tecnicas: Array < Tecnica > ;
  public tecnica:Tecnica;
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
