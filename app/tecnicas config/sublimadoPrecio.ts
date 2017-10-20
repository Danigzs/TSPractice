export class SublimadoPrecio {
    
       
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
              var _sublimadoprecio= new SublimadoPrecio();
              _sublimadoprecio.costo = this.costo;
              _sublimadoprecio.prendaDe = this.prendaDe;
              _sublimadoprecio.prendaHasta = this.prendaHasta;  
              
              return _sublimadoprecio;
            }
          }