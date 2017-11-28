export class AppConfig {
    _id: String;
    bordado: number;
    serigrafia: number;
    sublimado:number;
    id:number
    presecado:number
    revelado:number
    minBordado:number;
    minSerigrafia:number;
    minSublimado:number;
    minTransfer:number;
    minVinil:number;
    constructor() {

      this.revelado=0;
      this.presecado=0;
      this.minBordado = 0;
      this.minSerigrafia = 0;
      this.minSublimado = 0;
      this.minTransfer = 0;
      this.minVinil = 0;
    } 
    setCategoria( presecado:number,
                  revelado:number,
                  id:number,
                  
                  minBordado:number,
                  minSerigrafia:number,
                  minSublimado:number,
                  minTransfer:number,
                  minVinil:number
                ){

      this.revelado = revelado;
      this.presecado = presecado;
      this.id = id;
      this.minBordado = minBordado;
      this.minSerigrafia = minSerigrafia;
      this.minSublimado = minSublimado;
      this.minTransfer = minTransfer;
      this.minVinil = minVinil;
    }
  }
  