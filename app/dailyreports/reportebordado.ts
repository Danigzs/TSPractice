 
export class ReporteBordado {
  _id:number;
  fecha:Date;
  maquina:String
  folio:String;
  logo:String;
  puntadasLogo:Number;
  totalPuntadas:Number;
  fechaInicio:Date;
  fechaFinal:Date;
  noPiezasPorMaquina:String;
  productoBordado:String;
  noPiezasPorDia:String;
  observaciones: String
  bordador:String;

  constructor() {
    this._id = 0;
    this.fecha = new Date();
    this.maquina = "";
    this.folio= "";
    this.noPiezasPorMaquina = "";
    this.productoBordado = "";
    this.noPiezasPorDia = "";
    this.logo= "";
    this.puntadasLogo = 0;
    this.totalPuntadas = 0;
    this.fechaInicio = new Date();
    this.fechaFinal = new Date();
    this.observaciones = "";
    this.bordador = "";
    
  } 
}
