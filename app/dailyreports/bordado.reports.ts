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
  selector: 'bordadoreport',
    providers: [TecnicaService],
  styleUrls: ["app/dailyreports/bordado.reports.ts","app/styles/table.css"],
  templateUrl: "./app/dailyreports/bordado.report.html"
       
})
export class BordadoReportComponent  {
}