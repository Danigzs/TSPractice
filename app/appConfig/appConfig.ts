export class AppConfig {
    _id: String;
    bordado: number;
    serigrafia: number;
    sublimado:number;
    id:number
    presecado:number
    revelado:number
    constructor() {
      this.bordado =0;
      this.serigrafia = 0;
      this.sublimado = 0;
      this.revelado=0;
      this.presecado=0;
    } 
    setCategoria(presecado:number,revelado:number,id:number,bordado:number,serigrafia:number,sublimado:number){
      this.bordado = bordado;
      this.serigrafia = serigrafia;
      this.sublimado = sublimado;
      this.revelado = revelado;
      this.presecado = presecado;
      this.id = id;
    }
  }
  