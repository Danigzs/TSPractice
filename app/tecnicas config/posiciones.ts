export class Posiciones {
    
        costo: number;   
        posicion:string;
        constructor() {
    
          this.costo = 0.0;
          this.posicion="";
        } 
        setTecnica(posicion:string,costo:number){
          
          
          this.posicion = posicion;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _posiciones= new Posiciones();
          _posiciones.posicion = this.posicion;
          _posiciones.costo = this.costo;
        
          
          return _posiciones
        }
      }