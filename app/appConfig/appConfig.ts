export class AppConfig {
    _id: number;
    bordado: number;
    serigrafia: number;
    sublimado:number;
    presecado:number
    revelado:number
    minBordado:number;
    minSerigrafia:number;
    minSublimado:number;
    minTransfer:number;
    minVinil:number;
    constructor() {
      this._id = 0;
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
                  _id:number,
                  minBordado:number,
                  minSerigrafia:number,
                  minSublimado:number,
                  minTransfer:number,
                  minVinil:number
                ){

      this.revelado = revelado;
      this.presecado = presecado;
      this._id = _id;
      this.minBordado = minBordado;
      this.minSerigrafia = minSerigrafia;
      this.minSublimado = minSublimado;
      this.minTransfer = minTransfer;
      this.minVinil = minVinil;
    }
      copy( appConfig:AppConfig
                ){

      this.revelado = appConfig.revelado;
      this.presecado = appConfig.presecado;
      this._id = appConfig._id;
      this.minBordado = appConfig.minBordado;
      this.minSerigrafia = appConfig.minSerigrafia;
      this.minSublimado = appConfig.minSublimado;
      this.minTransfer = appConfig.minTransfer;
      this.minVinil = appConfig.minVinil;
    }
  }
  