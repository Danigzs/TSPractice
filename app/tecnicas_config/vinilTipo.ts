export class VinilTipo {
    
        costo: number;   
        nombre:string;
        constructor() {
    
          this.costo = 0.0;
          this.nombre="";
        } 
        setTecnica(nombre:string,costo:number){
          
          
          this.nombre = nombre;
          this.costo = costo;
          
        }
        copyNewTecnica(){
          var _vinilTipo= new VinilTipo();
          _vinilTipo.nombre = this.nombre;
          _vinilTipo.costo = this.costo;
        
          
          return _vinilTipo
        }
      }