export class BordadoPuntadas {
    
        price: number;           
        constructor() {
    
          this.price = 0.0;
          
        } 
        setTecnica(price:number){
          
          
          
          this.price = price;
          
        }
        copyNewTecnica(){
          var _bordadopuntadas= new BordadoPuntadas();
          _bordadopuntadas.price = this.price;
        
          
          return _bordadopuntadas
        }
      }