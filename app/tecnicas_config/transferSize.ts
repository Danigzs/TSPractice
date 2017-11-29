export class TransferSize {
    
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
          var _transfersize= new TransferSize();
          _transfersize.size = this.size;
          _transfersize.costo = this.costo;
        
          
          return _transfersize
        }
      }