export class BordadoPuntadas {
        _id:number;
        costo: number;           
        constructor() {    
          this.costo = 0.0;
          this._id=0;
          
        } 
        setTecnica(_id:number,costo:number){
          this.costo = costo;
          this._id = _id;
        }
        copyNewTecnica(){
          var _bordadopuntadas= new BordadoPuntadas();
          _bordadopuntadas.costo = this.costo;
          _bordadopuntadas._id = this._id;
        
          
          return _bordadopuntadas
        }
      }