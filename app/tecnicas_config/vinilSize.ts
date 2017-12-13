export class VinilSize {
        _id: number;
        costo: number;   
        size:string;
        constructor() {
          this._id = 0;
          this.costo = 0.0;
          this.size="";
        } 
        setTecnica(_id:number,size:string,costo:number){
          
          this._id = _id;
          this.size = size;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _vinilsize= new VinilSize();
          _vinilsize.size = this.size;
          _vinilsize.costo = this.costo;
          _vinilsize._id = this._id;
          
          return _vinilsize
        }
      }