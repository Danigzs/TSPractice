import { Injectable } from '@angular/core';
import { Tecnica } from './tecnica';
@Injectable()
export class TecnicaService {
    tecnicas:Array<Tecnica>;

    constructor(){
        var tecnica1= new Tecnica();
        var tecnica2= new Tecnica();
        var tecnica3= new Tecnica();
        var tecnica4= new Tecnica();

        tecnica1.setTecnica("Bordado",150);
        tecnica2.setTecnica("Serigrafia",50);
        tecnica3.setTecnica("Tampografia",60);
        tecnica4.setTecnica("Vinil",80);

        this.tecnicas = [tecnica1,tecnica2,tecnica3,tecnica4];
    }
    getTecnicas() {
    return this.tecnicas;
  }

}