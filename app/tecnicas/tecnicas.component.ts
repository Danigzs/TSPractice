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
  private tecnicaService:TecnicaService;
  constructor(private  _tecnicaService: TecnicaService) {
    this.tecnicaService = _tecnicaService;
    this.tecnicas = _tecnicaService.getTecnicas();
       
  }

  ngOnInit() {
   this.tecnica = new Tecnica();
  }

  agregarTecnica(){
    this.tecnicaService.addTecnica(this.tecnica);
    this.tecnica = new Tecnica();
  }
}