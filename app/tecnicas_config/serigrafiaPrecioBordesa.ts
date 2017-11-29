export class SerigrafiaPrecioBordesa {

  tintas:number
  costo: number;   
  prendaDe:number;
  prendaHasta:number;
  
  constructor() {
    
    this.costo = 0.0;
    this.tintas=0;
    this.prendaDe=0;
    this.prendaHasta=0;
  } 
  setTecnica(tintas:number,costo:number,desde:number,hasta:number){
    
    
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
    
    
    return _serigrafiaPrecioBordesa
  }
}