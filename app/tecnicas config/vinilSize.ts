export class VinilSize {
    
        costo: number;   
        size:string;
        constructor() {
    
          this.costo = 0.0;
          this.size="";
        } 
        setTecnica(size:string,costo:number){
          
          
          this.size = size;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _vinilsize= new VinilSize();
          _vinilsize.size = this.size;
          _vinilsize.costo = this.costo;
        
          
          return _vinilsize
        }
      }