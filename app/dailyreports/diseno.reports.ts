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


@Component({
  selector: 'disenoreport',
    providers: [TecnicaService],
  styleUrls: ["app/dailyreports/diseno.reports.css","app/styles/table.css"],
  templateUrl: "./app/dailyreports/diseno.reports.html"
       
})
export class DisenoReportComponent  {
}