import { Injectable } from '@angular/core';

@Injectable()
export class CotizadorService {
  cotizaciones:Array<any>;

  constructor() {
    
  }

  getCotizaciones() {
    return [this.cotizaciones];
  }
}