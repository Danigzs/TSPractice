import { Injectable } from '@angular/core';

import { Cotizacion } from "./cotizacion"

@Injectable()
export class CotizadorService {
  cotizaciones:Array<Cotizacion>;

  constructor() {
    
  }

  getCotizaciones() {
    return this.cotizaciones;
  }
}