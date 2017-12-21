export class TransferPrecioMaquila {
    
            _id: number;
            prendaDe: number;
            prendaHasta:number;
            costo: number;
            constructor() {
        
              this.costo = 0.0;
              this._id =0;
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
              var _transferpreciomaquila= new TransferPrecioMaquila ();
              _transferpreciomaquila.costo = this.costo;
              _transferpreciomaquila.prendaDe = this.prendaDe;
              _transferpreciomaquila.prendaHasta = this.prendaHasta;  
              _transferpreciomaquila._id=this._id;
              return _transferpreciomaquila;
            }
          }