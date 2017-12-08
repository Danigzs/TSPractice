export class SerigrafiaSize {
        _id: number;
        costo: number;   
        size:string;
        constructor() {
          this._id=0;
          this.costo = 0.0;
          this.size="";
        }
        setTecnica(_id:number,size:string,costo:number){
          
          this._id=_id;
          this.size = size;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _serigrafiasize= new SerigrafiaSize();
          _serigrafiasize.size = this.size;
          _serigrafiasize.costo = this.costo;
          _serigrafiasize._id=this._id;
          
          return _serigrafiasize
        }
      }