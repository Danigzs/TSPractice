import { Cliente } from "./../cliente/cliente"
import { Producto } from "./../producto/producto"

export class Cotizacion {
  cliente: Cliente;
  producto: Producto;
  productos: Array<Producto>;
  total: number;
  numeroCotizacion: String;
  fechaElaboracion: Date;
  estatus: String;
  

  constructor() {
    this.cliente = null;
    this.productos = [];
    this.total = 0.0;
    this.numeroCotizacion = "-1";
    this.fechaElaboracion = null;   
    this.estatus = "Nada"
  } 

    setCotizacion(producto: Producto, cliente:Cliente,productos:Array<Producto>,total:number,numeroCotizacion:string,fechaElaboracion:Date,estatus:string){
        this.cliente = cliente;
        this.producto = producto;
        this.productos = productos;
        this.total = total;
        this.numeroCotizacion = numeroCotizacion;
        this.fechaElaboracion = fechaElaboracion;
        this.estatus = estatus;

        

    } 
}
