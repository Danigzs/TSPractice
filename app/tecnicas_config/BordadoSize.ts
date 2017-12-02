export class BordadoSize {
    
        costo: number;   
        size:string;
        _id:Number;
        constructor() {
    
          this.costo = 0.0;
          this.size="";
          this._id=0;
        } 
        setTecnica(_id:number,size:string,costo:number){
          
          
          this.size = size;
          this.costo = costo;
          this._id = _id;
          
        }
        copyNewTecnica(){
          var _bordadosize= new BordadoSize();
          _bordadosize.size = this.size;
          _bordadosize.costo = this.costo;
          _bordadosize._id=this._id;
        
          
          return _bordadosize
        }
      }