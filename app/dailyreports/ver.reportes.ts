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
  selector: 'verreportes',
    providers: [TecnicaService],
  styleUrls: ["./app/dailyreports/ver.reportes.css", "app/styles/table.css"],
  templateUrl: "./app/dailyreports/ver.reportes.html"
       
})
export class VerReportesComponent  {

      currentDate = this.getTodayDate();

getTodayDate() {
    return new Date().toLocaleDateString();
  }
}