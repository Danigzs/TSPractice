export class Posiciones {
        _id:number;
        costo: number;   
        posiciones:string;
        constructor() {
    
          this.costo = 0.0;
          this.posiciones="";
          this._id=0;
        } 
        setTecnica(_id:number,posiciones:string,costo:number){
          
          
          this.posiciones = posiciones;
          this.costo = costo;
          this._id=_id;
          
        }
        copyNewTecnica(){
          var _posiciones= new Posiciones();
          _posiciones.posiciones = this.posiciones;
          _posiciones.costo = this.costo;
          _posiciones._id=this._id;
          
          return _posiciones
        }
      }