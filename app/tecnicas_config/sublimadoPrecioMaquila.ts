export class SublimadoPrecioMaquila {
    
            _id:number;
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
              
             this._id=_id;
              this.costo = costo;
              this.prendaDe = prendaDe;
              this.prendaHasta = prendaHasta;
              
            }
            copyNewTecnica(){
              var _sublimadopreciomaquila= new SublimadoPrecioMaquila();
              _sublimadopreciomaquila.costo = this.costo;
              _sublimadopreciomaquila.prendaDe = this.prendaDe;
              _sublimadopreciomaquila.prendaHasta = this.prendaHasta;  
              _sublimadopreciomaquila._id=this._id;
              return _sublimadopreciomaquila;
            }
          }