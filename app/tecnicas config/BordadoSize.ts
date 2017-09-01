export class BordadoSize {
    
        price: number;   
        size:string;
        constructor() {
    
          this.price = 0.0;
          this.size="";
        } 
        setTecnica(size:string,price:number){
          
          
          this.size = size;
          this.price = price;
          
        }
        copyNewTecnica(){
          var _bordadosize= new BordadoSize();
          _bordadosize.size = this.size;
          _bordadosize.price = this.price;
        
          
          return _bordadosize
        }
      }