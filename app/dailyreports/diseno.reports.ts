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
import { ReporteDisenoService } from './reportediseno.service';
import { ReporteDiseno } from './reportediseno';
import { MaquinaService } from './maquina.service';
import { NavigationExtras,Routes,RouterModule, Router, Route,ActivatedRoute} from '@angular/router';
import { Order } from '../orders/order';
import { OrderService } from '../orders/order.service';

@Component({
  selector: 'disenoreport',
    providers: [TecnicaService],
  //styleUrls: ["app/dailyreports/bordado.reports.ts","app/styles/table.css"],
  styleUrls: ["./app/cliente/addClient.css", "app/styles/table.css"],
  templateUrl: "./app/dailyreports/diseno.report.html"
       
})
export class DisenoReportComponent implements OnInit {
  public maquinaSelected:Maquina
  public reportesdiseno:Array<ReporteDiseno>;
  public maquinas:Array<Maquina>;
  public reporte:ReporteDiseno;
  



  constructor(private _reporteDisenoService:ReporteDisenoService,private route: ActivatedRoute,private router:Router, private _orderService:OrderService){

  }

  cargarReportes(){
    this.reportesdiseno = [];

    this._reporteDisenoService.getReportesDiseno().subscribe(data => {
      this.reportesdiseno = data;
    });

    
  }

getOrderById(orderId:Number){
  this._orderService.findById(orderId).subscribe(
    data=>{
      
      this.bindOrder(data[0]);
    })
  }
  bindOrder(order:Order){
    this.reporte.cliente = order.client;
    this.reporte.folio = order.folio;
    this.reporte.solicitante = order.user.name;
    this.reporte.fecha = order.createdAt;
  }
  ngOnInit(): void {
    this.reporte = new ReporteDiseno();

    this.route.params.subscribe(params=> { 
      
      
      console.log(params);
      if(params != null && params["id"] != null){ 
        this.getOrderById(params["id"]);
      }
        else {

        }
      
    
    });
    this.cargarReportes();

    
  }
  getFechaReporte(fecha:Date){
    return (new Date(fecha)).toLocaleDateString()
  }
  agregarReporte(){


    
    // if(this.reporte.fechaRecibido.length == 0){
    //   alert("Ingresar folio");
    //   return;
    // }
    // if(this.reporte.logotipo.length == 0){
    //   alert("Ingresar logo");
    //   return;
    // }
    
    // if(this.reporte.fechaInicio.length == 0){
    //   alert("Ingresar fecha inicio");
    //   return;
    // }
    // if(this.reporte.fechaFinal.length == 0){
    //   alert("Ingresar fecha final");
    //   return;
    // }

    this._reporteDisenoService.addReporteDiseno(this.reporte).subscribe(data => {
      this.cargarReportes();
      this.reporte = new ReporteDiseno();
    });
  }

}