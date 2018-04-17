import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TecnicaService} from '../producto/tecnica.service';
import {Tecnica} from '../producto/tecnica';
import {OrdersComponent} from '../orders/orders.component';
import {BordadoTipo} from './../tecnicas_config/BordadoTipo';
import {BordadoPuntadas} from './../tecnicas_config/BordadoPuntadas';
import {BordadoSize} from './../tecnicas_config/BordadoSize';
import {Posiciones} from './../tecnicas_config/posiciones';
 import {Bordado} from './../tecnicas/bordado'; 
 import {Sublimado} from './../tecnicas/sublimado'; 
 import {Colores} from './../tecnicas_config/colores'
import {Grafico} from './../grafico/grafico'; 
import {Serigrafia} from './../tecnicas/serigrafia'; 
import {Vinil} from './../tecnicas/vinil'; 
import {Transfer} from './../tecnicas/transfer'; 
import { Maquina } from './maquina';
import { ReporteBordadoService } from './reportebordado.service';
import { ReporteBordado } from './reportebordado';
import { MaquinaService } from './maquina.service';

@Component({
  selector: 'bordadoreport',
    providers: [TecnicaService],
  //styleUrls: ["app/dailyreports/bordado.reports.ts","app/styles/table.css"],
  styleUrls: ["./app/cliente/addClient.css", "app/styles/table.css"],
  templateUrl: "./app/dailyreports/bordado.report.html"
       
})
export class BordadoReportComponent implements OnInit {
  public maquinaSelected:Maquina
  public reportesbordado:Array<ReporteBordado>;
  public reportesbordadoAll:Array<ReporteBordado>;
  public maquinas:Array<Maquina>;
  public maquinasFilroAll:Array<Maquina>;
  public maquinasFilro:Array<Maquina>;
  public maquinaSelectedFilter:Maquina;
  public reporte:ReporteBordado;
  constructor(private _reporteBordadoService:ReporteBordadoService, private _maquinasService:MaquinaService){

  }

  cargarReportes(){
    this.reportesbordado = [];
    this.reportesbordadoAll = [];
    this.reporte = new ReporteBordado();
    
    this._maquinasService.getMaquinas().subscribe(data => {
      this.maquinas = data;
      this.maquinasFilro = data;
      this.maquinasFilroAll = data;
      this.maquinaSelected = this.maquinas[0];
      this.maquinaSelectedFilter = this.maquinasFilroAll[0];
    });

    this._reporteBordadoService.getReportesBordado().subscribe(data => {
      this.reportesbordado = data;
      this.reportesbordadoAll = data;
    });

    
  }

  ngOnInit(): void {
    this.cargarReportes();
    
  }
  getFechaReporte(fecha:Date){
    return (new Date(fecha)).toLocaleDateString()
  }
  agregarReporte(){
    if(this.reporte.folio.length == 0){
      alert("Ingresar folio");
      return;
    }
    if(this.reporte.logo.length == 0){
      alert("Ingresar logo");
      return;
    }
    
    // if(this.reporte.fechaInicio.length == 0){
    //   alert("Ingresar fecha inicio");
    //   return;
    // }
    // if(this.reporte.fechaFinal.length == 0){
    //   alert("Ingresar fecha final");
    //   return;
    // }

    this.reporte.maquina = this.maquinaSelected.name;
    this._reporteBordadoService.addReporteBordado(this.reporte).subscribe(data => {
      this.cargarReportes();
    });
  }

  aplicarFiltros(){

  }
  OnMaquinaFiltroChanged(){

  }

  OnFolioFiltroChanged(){

  }
  OnFechaFiltroChanged(){

  }
  OnInicioFiltroChanged(){

  }
  OnFinalFiltroChanged(){

  }
  OnBordadorFiltroChanged(){
    // this.reportesbordado.filter()
  }
}