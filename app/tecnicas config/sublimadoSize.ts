export class SublimadoSize {
    
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
          var _sublimadosize= new SublimadoSize();
          _sublimadosize.size = this.size;
          _sublimadosize.costo = this.costo;
        
          
          return _sublimadosize
        }
      }