export class SerigrafiaTipoTinta {
    
        price: number;   
        tipotinta:string;
        constructor() {
    
          this.price = 0.0;
          this.tipotinta="";
        } 
        setTecnica(tipotinta:string,price:number){
          
          
          this.tipotinta = tipotinta;
          this.price = price;
          
        }
        copyNewTecnica(){
          var _serigrafiatipotinta= new SerigrafiaTipoTinta();
          _serigrafiatipotinta.tipotinta = this.tipotinta;
          _serigrafiatipotinta.price = this.price;
        
          
          return _serigrafiatipotinta
        }
      }