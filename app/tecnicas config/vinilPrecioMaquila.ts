export class VinilPrecioMaquila {
    
       
            prendaDe: number;
            prendaHasta:number;
            costo: number;
            constructor() {
        
              this.costo = 0.0;
             
              this.prendaDe = 0;
              this.prendaHasta = 0;
            } 
            setTecnica(prendaDe:number,prendaHasta:number,costo:number){              
              
             
              this.costo = costo;
              this.prendaDe = prendaDe;
              this.prendaHasta = prendaHasta;
              
            }
            copyNewTecnica(){
              var _vinilpreciomaquila= new VinilPrecioMaquila();
              _vinilpreciomaquila.costo = this.costo;
              _vinilpreciomaquila.prendaDe = this.prendaDe;
              _vinilpreciomaquila.prendaHasta = this.prendaHasta;  
              
              return _vinilpreciomaquila;
            }
          }