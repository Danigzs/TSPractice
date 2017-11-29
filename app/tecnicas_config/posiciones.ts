export class Posiciones {
    
        costo: number;   
        posiciones:string;
        constructor() {
    
          this.costo = 0.0;
          this.posiciones="";
        } 
        setTecnica(posiciones:string,costo:number){
          
          
          this.posiciones = posiciones;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _posiciones= new Posiciones();
          _posiciones.posiciones = this.posiciones;
          _posiciones.costo = this.costo;
        
          
          return _posiciones
        }
      }