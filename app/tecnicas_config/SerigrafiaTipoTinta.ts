export class SerigrafiaTipoTinta {
        _id: number;
        costo: number;   
        tipotinta:string;
        constructor() {
          this._id=0;
          this.costo = 0.0;
          this.tipotinta="";
        } 
        setTecnica(_id:number,tipotinta:string,costo:number){
          
          
          this.tipotinta = tipotinta;
          this.costo = costo;
          this._id=_id;
          
        }
        copyNewTecnica(){
          var _serigrafiatipotinta= new SerigrafiaTipoTinta();
          _serigrafiatipotinta.tipotinta = this.tipotinta;
          _serigrafiatipotinta.costo = this.costo;
          _serigrafiatipotinta._id=this._id;
          
          return _serigrafiatipotinta
        }
      }