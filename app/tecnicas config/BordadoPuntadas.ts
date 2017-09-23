export class BordadoPuntadas {
    
        costo: number;           
        constructor() {    
          this.costo = 0.0;
          
        } 
        setTecnica(costo:number){
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _bordadopuntadas= new BordadoPuntadas();
          _bordadopuntadas.costo = this.costo;
        
          
          return _bordadopuntadas
        }
      }