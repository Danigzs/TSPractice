export class SerigrafiaTipoTinta {
    
        price: number;   
        tipo:string;
        constructor() {
    
          this.price = 0.0;
          this.tipo="";
        } 
        setTecnica(tipo:string,price:number){
          
          
          this.tipo = tipo;
          this.price = price;
          
        }
        copyNewTecnica(){
          var _serigrafiatipotinta= new SerigrafiaTipoTinta();
          _serigrafiatipotinta.tipo = this.tipo;
          _serigrafiatipotinta.price = this.price;
        
          
          return _serigrafiatipotinta
        }
      }