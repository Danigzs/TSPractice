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
        var tecnica5= new Tecnica();
        var tecnica6= new Tecnica();
        var tecnica7= new Tecnica();

        tecnica1.setTecnica(1,"Bordado",150);
        tecnica2.setTecnica(2,"Serigrafia",50);
        tecnica3.setTecnica(3,"Tampografia",60);
        tecnica4.setTecnica(4,"Vinil",80);
        tecnica5.setTecnica(5,"Sublimado", 90)
        tecnica6.setTecnica(6,"Bordado3D", 200)
        tecnica7.setTecnica(7,"Vinil Textil",100)

        this.tecnicas = [tecnica1,tecnica2,tecnica3,tecnica4,tecnica5,tecnica6,tecnica7];
    }
    getTecnicas() {
    return this.tecnicas;
  }

  addTecnica(tecnica:Tecnica){
      this.tecnicas.push(tecnica);
  }

}