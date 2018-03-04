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
    return this.getDateTime();
  }
  getDateTime(){
    var d = new Date();
    var hora = d.getHours();    
    var minutos = d.getMinutes();
    var segundos = d.getSeconds();
    var date = d.toLocaleString();
    var hour = hora.toString();
    var minutes = minutos.toString();
    var seconds = segundos.toString();
    var fecha = (date +" "+ hour+":"+minutes+":"+seconds).toString();
    return  fecha;
  }
}