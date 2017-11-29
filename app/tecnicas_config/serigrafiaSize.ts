export class SerigrafiaSize {
    
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
          var _serigrafiasize= new SerigrafiaSize();
          _serigrafiasize.size = this.size;
          _serigrafiasize.costo = this.costo;
        
          
          return _serigrafiasize
        }
      }