export class serigrafiaPrecioCliente {



        tintas: number;
        prendaDe: number;
        prendaHasta:number;
        costo: number;
        constructor() {
    
          this.costo = 0.0;
          this.tintas= 0;
          this.prendaDe = 0;
          this.prendaHasta = 0;
        } 
        setTecnica(tintas:number,prendaDe:number,prendaHasta:number,costo:number){
          
          
          this.tintas = tintas;
          this.costo = costo;
          this.prendaDe = prendaDe;
          this.prendaHasta = prendaHasta;
          
        }
        copyNewTecnica(){
          var _serigrafiapreciocliente= new serigrafiaPrecioCliente();
          _serigrafiapreciocliente.tintas = this.tintas;
          _serigrafiapreciocliente.costo = this.costo;
          _serigrafiapreciocliente.prendaDe = this.prendaDe;
          _serigrafiapreciocliente.prendaHasta = this.prendaHasta;  
          
          return _serigrafiapreciocliente;
        }
      }