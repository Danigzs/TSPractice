export class Colores {
        _id:number;
        color: number;  
        hilo: string;
        marca: string; 
        constructor() {
    
          this.color = 0.0;
          this.hilo = "";
          this.marca= "";
        } 
        setTecnica(hilo:string,marca:string,_id:number,color:number){
          
          this._id = _id
          this.color = color;
          this.hilo = hilo;
          this.marca = marca;

          
        }
        copyNewTecnica(){
          var _colores= new Colores();
          _colores.color = this.color;
          _colores.hilo = this.hilo;
          _colores.marca = this.marca;
          _colores._id = 0;
        
          
          return _colores
        }
      }