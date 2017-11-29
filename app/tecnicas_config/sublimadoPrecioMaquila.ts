export class SublimadoPrecioMaquila {
    
       
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
              var _sublimadopreciomaquila= new SublimadoPrecioMaquila();
              _sublimadopreciomaquila.costo = this.costo;
              _sublimadopreciomaquila.prendaDe = this.prendaDe;
              _sublimadopreciomaquila.prendaHasta = this.prendaHasta;  
              
              return _sublimadopreciomaquila;
            }
          }