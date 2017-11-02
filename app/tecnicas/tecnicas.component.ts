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
  styleUrls: ["./app/tecnicas/tecnicas.css", "app/styles/table.css"],
  templateUrl: "./app/tecnicas/tecnicas.html"
  
})
export class TecnicasComponent  {
  public tecnicas: Array < Tecnica > ;
  public tecnica:Tecnica;
  public showBordado = true;
  public showSerigrafia = false;
  public showSublimado = false;
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
    debugger
    if(this.tecnica.name.length > 0)
    {
      this._tecnicaService.addTecnica(this.tecnica).subscribe(
        data => {
          this.reloadTecnicas();
        }
        );
    }
  }
  updateTecnica()
  {
    debugger
    if(this.tecnica.name.length > 0)
    {
      this._tecnicaService.addTecnica(this.tecnica).subscribe(
        data => {
          this.reloadTecnicas();
        }
        );
    }
  }
}
