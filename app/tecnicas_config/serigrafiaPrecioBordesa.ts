export class SerigrafiaPrecioBordesa {
  _id:number;
  tintas:number
  costo: number;   
  prendaDe:number;
  prendaHasta:number;
  
  constructor() {
    this._id=0;
    this.costo = 0.0;
    this.tintas=0;
    this.prendaDe=0;
    this.prendaHasta=0;
  } 
  setTecnica(_id:number,tintas:number,costo:number,desde:number,hasta:number){
    
    this._id=_id;
    this.tintas = tintas;
    this.costo = costo;
    this.prendaDe = desde;
    this.prendaHasta = hasta;
    
  }
  copyNewTecnica(){
    var _serigrafiaPrecioBordesa= new SerigrafiaPrecioBordesa();
    _serigrafiaPrecioBordesa.tintas = this.tintas;
    _serigrafiaPrecioBordesa.costo = this.costo;
    _serigrafiaPrecioBordesa.prendaDe = this.prendaDe;
    _serigrafiaPrecioBordesa.prendaHasta = this.prendaHasta;
    _serigrafiaPrecioBordesa._id=this._id;
    
    return _serigrafiaPrecioBordesa
  }
}