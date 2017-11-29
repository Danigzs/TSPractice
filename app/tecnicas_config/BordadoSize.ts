export class BordadoSize {
    
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
          var _bordadosize= new BordadoSize();
          _bordadosize.size = this.size;
          _bordadosize.costo = this.costo;
        
          
          return _bordadosize
        }
      }