export class AppConfig {
    _id: String;
    bordado: number;
    serigrafia: number;
    sublimado:number;
    id:number
    constructor() {
      this.bordado = 0;
      this.serigrafia = 0;
      this.sublimado = 0;
    } 
    setCategoria(id:number,bordado:number,serigrafia:number,sublimado:number){
      this.bordado = bordado;
      this.serigrafia = serigrafia;
      this.sublimado = sublimado;
      this.id = id;
    }
  }
  