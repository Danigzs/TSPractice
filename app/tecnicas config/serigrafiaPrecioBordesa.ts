export class SerigrafiaPrecioBordesa {

        tintas:number
        costo: number;   
        desde:number;
        hasta:number;
        
        constructor() {
    
          this.costo = 0.0;
          this.tintas=0;
          this.desde=0;
          this.hasta=0;
        } 
        setTecnica(tintas:number,costo:number,desde:number,hasta:number){
          
          
          this.tintas = tintas;
          this.costo = costo;
          this.desde = desde;
          this.hasta = hasta;
          
        }
        copyNewTecnica(){
          var _serigrafiaPrecioBordesa= new SerigrafiaPrecioBordesa();
          _serigrafiaPrecioBordesa.tintas = this.tintas;
          _serigrafiaPrecioBordesa.costo = this.costo;
          _serigrafiaPrecioBordesa.desde = this.desde;
          _serigrafiaPrecioBordesa.hasta = this.hasta;
        
          
          return _serigrafiaPrecioBordesa
        }
      }