export class VinilPrecio {
    
       
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
              var _vinilprecio= new VinilPrecio();
              _vinilprecio.costo = this.costo;
              _vinilprecio.prendaDe = this.prendaDe;
              _vinilprecio.prendaHasta = this.prendaHasta;  
              
              return _vinilprecio;
            }
          }