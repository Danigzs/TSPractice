import { Cliente } from "./../cliente/cliente"
import { Producto } from "./../producto/producto"
import { Tecnica } from "./../producto/tecnica"

export class Cotizacion {
  tecnica: Tecnica;
  cliente: Cliente;
  producto: Producto;

  productos: Array<Producto>;
  total: number;
  cantidad: number;
  numeroCotizacion: String;
  fechaElaboracion: Date;
  estatus: String;
  

  constructor() {
    this.cliente = null;
    this.tecnica = null;
    this.productos = [];   
    this.total = 0.0;
    this.numeroCotizacion = "-1";
    this.fechaElaboracion = null;   
    this.estatus = "Nada"
  } 

    setCotizacion(tecnica: Tecnica, producto: Producto, cliente:Cliente, productos:Array<Producto>, total:number, numeroCotizacion:string, fechaElaboracion:Date, estatus:string, cantidad: number){
        this.cliente = cliente;
        this.tecnica = tecnica;
        this.producto = producto;
        this.productos = productos;
        this.total = total;        
        this.numeroCotizacion = numeroCotizacion;
        this.fechaElaboracion = fechaElaboracion;
        this.estatus = estatus;
          } 
}