export class Ubicaciones {
    
        ubicaciones:string;
        constructor() {
    
          this.ubicaciones = "";
        } 
        setTecnica(ubicaciones:string){
          
          
          this.ubicaciones = ubicaciones;
          
        }
        copyNewTecnica(){
          var _ubicaciones= new Ubicaciones();
          _ubicaciones.ubicaciones = this.ubicaciones;
        
          
          return _ubicaciones
      }