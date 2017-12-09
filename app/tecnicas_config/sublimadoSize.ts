export class SublimadoSize {
        _id: number;
        costo: number;   
        size:string;
        constructor() {
          this._id=0;
          this.costo = 0.0;
          this.size="";
        } 
        setTecnica(_id:number,size:string,costo:number){
          
          this._id;
          this.size = size;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _sublimadosize= new SublimadoSize();
          _sublimadosize.size = this.size;
          _sublimadosize.costo = this.costo;
          _sublimadosize._id = this._id;
          
          return _sublimadosize
        }
      }