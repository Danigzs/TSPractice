export class VinilTipo {
        _id: number;
        costo: number;   
        nombre:string;
        constructor() {
          this._id=0;
          this.costo = 0.0;
          this.nombre="";
        } 
        setTecnica(_id:number,nombre:string,costo:number){
          
          this._id = _id;
          this.nombre = nombre;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _vinilTipo= new VinilTipo();
          _vinilTipo.nombre = this.nombre;
          _vinilTipo.costo = this.costo;
          _vinilTipo._id = this._id;
          
          return _vinilTipo
        }
      }