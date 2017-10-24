import {Bordado} from './../tecnicas/bordado'; 
import {Serigrafia} from './../tecnicas/serigrafia'; 
import {Sublimado} from './../tecnicas/sublimado'; 
import {Transfer} from './../tecnicas/transfer';
import {Vinil} from './../tecnicas/vinil';

export class Grafico {
  _id: string; 
  name: string;
  summary: string;
  price: number;
  quantity: number;
  constructor() {
    this.name = "";
    this.summary = "";
    this.price = 0.0;
    this.quantity = 0;
  } 
  set(name:string, summary: string, price:number, quantity:number, tech:string){
    this.name = tech;
    this.summary = summary;
    this.price = price;
    this.quantity = quantity;
  }
  setBordado(bordado:Bordado)
  {
    this.name = "Bordado" ;
    this.price = bordado.price * bordado.cantidad;
    this.summary =  "<b>Tipo: </b>" + bordado.bType.nombre + 
                    "<br><b>Ubicación: </b>" + bordado.bPosition.posiciones + 
                    "<br><b>Colores: </b>" + bordado.bColores.join(",") + 
                    "<br><b>Puntadas: </b>" + bordado.puntadas +
                    "<br><b>Tamaño: </b>" + bordado.bSize.size;
    this.quantity = bordado.cantidad;
  }
  setSerigrafia(serigrafia:Serigrafia)
  {
    this.name = "Serigrafia";
    this.price = serigrafia.price;
    this.summary =  "<b>Posición: </b>" + serigrafia.bUbications.ubicaciones + 
                    "<br><b>Tipo Tinta: </b>" + serigrafia.bInkType.tipotinta + 
                    "<br><b>Tamaño: </b>" + serigrafia.bSize.size + 
                    "<br><b>No. tintas: </b>" + serigrafia.tintas +
                    "<br><b>No. prendas: </b>" + serigrafia.quantity + 
                    "<br><b>Con Prendas: </b>" + (serigrafia.wItem == 1 ? "Sí" : "No") 
    this.quantity = 1;
  }
  setSublimado(sublimado:Sublimado)
  {
     this.name = "Sublimado";
    this.price = sublimado.price;
    this.summary =  "<b>Posición: </b>" + sublimado.position + 
                    "<br><b>Tamaño: </b>" + sublimado.size + 
                    "<br><b>No. prendas: </b>" + sublimado.quantity + 
                    "<br><b>Con Prendas: </b>" + (sublimado.wItem == 1 ? "Sí" : "No") 
    this.quantity = 1;
  }
  setTransfer(transfer:Transfer)
  {
     this.name = "Transfer";
     this.price = transfer.price;
     this.summary = "<b>Posición: </b>" + transfer.position + 
     "<br><b>Tamaño: </b>" + transfer.size + 
     "<br><b>No. prendas: </b>" + transfer.quantity + 
     "<br><b>Con Prendas: </b>" + (transfer.wItem == 1 ? "Sí" : "No") 
     this.quantity = 1;
     

  }
  setVinil(vinil:Vinil)
  {
     
  }
  copy(){
    var _grafico= new Grafico();
    _grafico.name =this.name;
    _grafico.summary = this.summary;   
    _grafico.price = this.price;   
    _grafico.quantity = this.quantity;
    return _grafico
  }
}