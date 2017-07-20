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
  selector: 'disenoreport',
    providers: [TecnicaService],
  styleUrls: ["app/dailyreports/diseno.reports.css","app/styles/table.css"],
  templateUrl: "./app/dailyreports/diseno.reports.html"
       
})
export class DisenoReportComponent  {
}