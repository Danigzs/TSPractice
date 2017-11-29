export class TransferPrecio {
    
       
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
              var _transferprecio= new TransferPrecio ();
              _transferprecio.costo = this.costo;
              _transferprecio.prendaDe = this.prendaDe;
              _transferprecio.prendaHasta = this.prendaHasta;  
              
              return _transferprecio;
            }
          }