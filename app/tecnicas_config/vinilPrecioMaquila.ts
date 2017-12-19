export class VinilPrecioMaquila {
    
            _id: number;
            prendaDe: number;
            prendaHasta:number;
            costo: number;
            constructor() {
              this._id=0;
              this.costo = 0.0;
             
              this.prendaDe = 0;
              this.prendaHasta = 0;
            } 
            setTecnica(_id:number,prendaDe:number,prendaHasta:number,costo:number){              
              
              this._id = _id;
              this.costo = costo;
              this.prendaDe = prendaDe;
              this.prendaHasta = prendaHasta;
              
            }
            copyNewTecnica(){
              var _vinilpreciomaquila= new VinilPrecioMaquila();
              _vinilpreciomaquila.costo = this.costo;
              _vinilpreciomaquila.prendaDe = this.prendaDe;
              _vinilpreciomaquila.prendaHasta = this.prendaHasta;  
              _vinilpreciomaquila._id = this._id;
              return _vinilpreciomaquila;
            }
          }