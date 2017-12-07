export class Ubicaciones {
        _id:number;
        ubicaciones:string;
        constructor() {
          this._id=0;
          this.ubicaciones = "";
        } 
        setTecnica(_id:number,ubicaciones:string){
          
          this._id=_id;
          this.ubicaciones = ubicaciones;
          
        }
        copyNewTecnica(){
          var _ubicaciones= new Ubicaciones();
          _ubicaciones.ubicaciones = this.ubicaciones;
        
          
          return _ubicaciones
      }
    }