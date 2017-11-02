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
import {BordadoTipo} from './../tecnicas config/BordadoTipo';
import {BordadoPuntadas} from './../tecnicas config/BordadoPuntadas';
import {BordadoSize} from './../tecnicas config/BordadoSize';
import {Posiciones} from './../tecnicas config/posiciones';
 import {Bordado} from './../tecnicas/bordado'; 
 import {Sublimado} from './../tecnicas/sublimado'; 
 import {Colores} from './../tecnicas config/colores'
import {Grafico} from './../grafico/grafico'; 
import {Serigrafia} from './../tecnicas/serigrafia'; 
import {Vinil} from './../tecnicas/vinil'; 
import {Transfer} from './../tecnicas/transfer'; 

@Component({
  selector: 'bordadoreport',
    providers: [TecnicaService],
  styleUrls: ["app/dailyreports/bordado.reports.ts","app/styles/table.css"],
  templateUrl: "./app/dailyreports/bordado.report.html"
       
})
export class BordadoReportComponent  {


}