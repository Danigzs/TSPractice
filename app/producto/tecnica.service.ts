import { Injectable } from '@angular/core';
import { Tecnica } from './tecnica';
@Injectable()
export class TecnicaService {
    tecnicas:Array<Tecnica>;

    constructor(){
        var tecnica1= new Tecnica();
        var tecnica2= new Tecnica();

        tecnica1.setTecnica("Bordado",150);
        tecnica2.setTecnica("Serigrafia",50);

        this.tecnicas = [tecnica1,tecnica2];
    }
    getTecnicas() {
    return this.tecnicas;
  }

}