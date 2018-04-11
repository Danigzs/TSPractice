 
export class ReporteBordado {
  _id:number;
  fecha:Date;
  maquina:String
  folio:String;
  logo:String;
  puntadasLogo:Number;
  totalPuntadas:Number;
  fechaInicio:String;
  fechaFinal:String;
  observaciones: String
  bordador:String;

  constructor() {
    this._id = 0;
    this.fecha = new Date();
    this.maquina = "";
    this.folio= "";
    this.logo= "";
    this.puntadasLogo = 0;
    this.totalPuntadas = 0;
    this.fechaInicio = "";
    this.fechaFinal = "";
    this.observaciones = "";
    this.bordador = "";
    
  } 
}
