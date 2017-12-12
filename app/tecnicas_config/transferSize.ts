export class TransferSize {
        _id: number;
        costo: number;   
        size:string;
        constructor() {
          this._id=0;
          this.costo = 0.0;
          this.size="";
        } 
        setTecnica(_id:number,size:string,costo:number){
          
          this._id = _id;
          this.size = size;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _transfersize= new TransferSize();
          _transfersize.size = this.size;
          _transfersize.costo = this.costo;
          _transfersize._id = this._id;
          
          return _transfersize
        }
      }