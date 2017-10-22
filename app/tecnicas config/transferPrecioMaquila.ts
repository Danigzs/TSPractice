export class TransferPrecioMaquila {
    
       
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
              var _transferpreciomaquila= new TransferPrecioMaquila ();
              _transferpreciomaquila.costo = this.costo;
              _transferpreciomaquila.prendaDe = this.prendaDe;
              _transferpreciomaquila.prendaHasta = this.prendaHasta;  
              
              return _transferpreciomaquila;
            }
          }