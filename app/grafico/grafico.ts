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
  percentageSize: number;
  percentageType: number;
  percentagePosition:number;
  constructor() {
    this.name = "";
    this.summary = "";
    this.price = 0.0;
    this.quantity = 0;
    this.percentageSize = 0;
    this.percentageType = 0;
    this.percentagePosition = 0;
  } 
  set(name:string, summary: string, price:number, quantity:number, percentageSize:number, percentageType:number, percentagePosition:number){
    this.name = tech;
    this.summary = summary;
    this.price = price;
    this.quantity = quantity;
    this.percentageSize = percentageSize;
    this.percentageType = percentageType;
    this.percentagePosition = percentagePosition;
  }
  setBordado(bordado:Bordado)
  {
    this.name = "Bordado" ;
    this.price = bordado.price * bordado.cantidad;
    var percentage = (bordado.percentageType + bordado.percentageSize + bordado.percentagePosition);
    this.summary =  "<b>Tipo: </b>" + bordado.bType.nombre + 
                    "<br><b>Posición: </b>" + bordado.bPosition.posiciones + 
                    "<br><b>Colores: </b>" + bordado.bColores.join(",") + 
                    "<br><b>Puntadas: </b>" + bordado.puntadas +
                    "<br><b>Tamaño: </b>" + bordado.bSize.size +
                    "<br><b>Porcentage: </b>" + percentage +  "%";
    this.quantity = bordado.cantidad;
    this.percentageSize = bordado.percentageSize;
    this.percentageType = bordado.percentageType;
    this.percentagePosition = bordado.percentagePosition;

  }
  setSerigrafia(serigrafia:Serigrafia)
  {
    this.name = "Serigrafia";
    this.price = serigrafia.price;
    var percentage = (serigrafia.percentageType + serigrafia.percentageSize);
    this.summary =  "<b>Posición: </b>" + serigrafia.bUbications.ubicaciones + 
                    "<br><b>Tipo Tinta: </b>" + serigrafia.bInkType.tipotinta + 
                    "<br><b>Tamaño: </b>" + serigrafia.bSize.size + 
                    "<br><b>No. tintas: </b>" + serigrafia.tintas +
                    "<br><b>No. prendas: </b>" + serigrafia.quantity + 
                    "<br><b>Con Prendas: </b>" + (serigrafia.wItem == true ? "Sí" : "No") +
                    "<br><b>Porcentage: </b>" + percentage + "%";
    this.quantity = 1;
    this.percentageSize = serigrafia.percentageSize;
    this.percentageType = serigrafia.percentageSize;
  }
  setSublimado(sublimado:Sublimado)
  {
     this.name = "Sublimado";
    this.price = sublimado.price;
    this.summary =  "<b>Posición: </b>" + sublimado.position + 
                    "<br><b>Tamaño: </b>" + sublimado.size + 
                    "<br><b>No. prendas: </b>" + sublimado.quantity + 
                    "<br><b>Con Prendas: </b>" + (sublimado.wItem == true ? "Sí" : "No") +
                    "<br><b>Porcentage: </b>" + sublimado.percentageSize + "%";
    this.quantity = 1;
    this.percentageSize = sublimado.percentageSize;
  }
  setTransfer(transfer:Transfer)
  {
     this.name = "Transfer";
     this.price = transfer.price;
     this.summary = "<b>Posición: </b>" + transfer.position + 
     "<br><b>Tamaño: </b>" + transfer.size + 
     "<br><b>No. prendas: </b>" + transfer.quantity + 
     "<br><b>Con Prendas: </b>" + (transfer.wItem == true ? "Sí" : "No")  +
     "<br><b>Porcentage: </b>" + transfer.percentageSize + "%";
     this.quantity = 1;
     this.percentageSize = transfer.percentageSize;

  }
  setVinil(vinil:Vinil)
  {
<<<<<<< HEAD
    this.name = "Vinil";
    this.price = vinil.price;
    this.summary = "<b>Tipo: </b>" + vinil.nombre +
     "<b>Posición: </b>" + vinil.position + 
    "<br><b>Tamaño: </b>" + vinil.size + 
    "<br><b>No. prendas: </b>" + vinil.quantity + 
    "<br><b>Con Prendas: </b>" + (vinil.wItem == 1 ? "Sí" : "No") 
    this.quantity = 1;
     
=======
     this.name = "Vinil";
     this.price = vinil.price;
     var percentage = (vinil.percentageType + vinil.percentageSize );
     this.summary = "<b>Tipo: </b>" + vinil.nombre + 
     "<br><b>Tamaño: </b>" + vinil.size + 
     "<br><b>Posición: </b>" + vinil.position + 
     "<br><b>No. prendas: </b>" + vinil.quantity + 
     "<br><b>Con Prendas: </b>" + (vinil.wItem == true ? "Sí" : "No")  +
     "<br><b>Porcentage: </b>" + percentage + "%"; 
     this.quantity = 1;
     this.percentageSize = vinil.percentageSize;
     this.percentageType = vinil.percentageType;
>>>>>>> a9e2e77adf93d1daa1c369097dae1848c4df4f69
  }
  copy(){
    var _grafico= new Grafico();
    _grafico.name =this.name;
    _grafico.summary = this.summary;   
    _grafico.price = this.price;   
    _grafico.quantity = this.quantity;
    _grafico.percentageSize = this.percentageSize;
    _grafico.percentageType = this.percentageType;
    _grafico.percentagePosition = this.percentagePosition;
    return _grafico
  }
}