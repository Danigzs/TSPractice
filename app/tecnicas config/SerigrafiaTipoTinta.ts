export class SerigrafiaTipoTinta {
    
        costo: number;   
        tipotinta:string;
        constructor() {
    
          this.costo = 0.0;
          this.tipotinta="";
        } 
        setTecnica(tipotinta:string,costo:number){
          
          
          this.tipotinta = tipotinta;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _serigrafiatipotinta= new SerigrafiaTipoTinta();
          _serigrafiatipotinta.tipotinta = this.tipotinta;
          _serigrafiatipotinta.costo = this.costo;
        
          
          return _serigrafiatipotinta
        }
      }