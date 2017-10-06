export class Colores {
        _id:number;
        color: number;   
        constructor() {
    
          this.color = 0.0
        } 
        setTecnica(_id:number,color:number){
          
          this._id = _id
          this.color = color;
          
        }
        copyNewTecnica(){
          var _colores= new Colores();
          _colores.color = this.color;
          _colores._id = 0;
        
          
          return _colores
        }
      }