export class Colores {
    
        color: number;   
        constructor() {
    
          this.color = 0.0
        } 
        setTecnica(color:number){
          
          
          this.color = color;
          
        }
        copyNewTecnica(){
          var _colores= new Colores();
          _colores.color = this.color;
        
          
          return _colores
        }
      }