import { Cliente } from "../cliente/cliente";

 
export class ReporteDiseno {
  _id:number;
  fecha:Date;
  cliente:Cliente
  folio:number;
  fechaRecibido:String;
  solicitante:String;
  horaEntrada:String;
  tecnica:String;
  comprasTaller:String;
  puntadas:String;
  tintas:String;
  fechaSalida:String;
  horaSalida: String
  logotipo:String;
  comentarios:String;
  trabajoCreadoPor:String;
 

  constructor() {
    this._id = 0;
    this.fecha = new Date();
    this.cliente = new Cliente();
    this.folio= -1;
    this.fechaRecibido = "";
    this.solicitante = "";
    this.horaEntrada = "";
    this.tecnica = "";
    this.comprasTaller = "";
    this.puntadas = "";
    this.tintas = "";
    this.fechaSalida = "";
    this.horaSalida = "";
    this.logotipo = "";
    this.comentarios = "";
    this.trabajoCreadoPor = "";
    
  } 
}
