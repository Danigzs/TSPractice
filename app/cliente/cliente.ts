export class Cliente {
  nombre: String;
  razonSocial: String;
  domicilio: String;
  estado: String;
  municipio: String;
  colonia: String;
  pais: String;
  codigoPostal: String;
  telefono: String;
  email: String;
  atencionA: String;
  rfc: String;
  id: number;
  clave: number

  constructor() {
    this.id = 0;
    this.clave = 0;
    this.nombre = "";
    this.razonSocial = "";
    this.domicilio = "";
    this.estado = "";
    this.municipio = "";
    this.colonia = "";
    this.pais = "";
    this.codigoPostal = "";
    this.telefono = "";
    this.email = "";
    this.atencionA = "";
    this.rfc = "";
  } 

  setCliente(id:number, clave:number,nombre:string,razonSocial:string,domicilio:string,estado:string,municipio:string,colonia:string,pais:string,codigoPostal:string,telefono:string,email:string,atencionA:string,rfc:string){
    this.id = id;
    this.clave = clave;
    this.nombre = nombre;
    this.razonSocial = razonSocial;
    this.domicilio = domicilio;
    this.estado = estado;
    this.municipio = municipio;
    this.colonia = colonia;
    this.pais = pais;
    this.codigoPostal = codigoPostal;
    this.telefono = telefono;
    this.email = email;
    this.atencionA = atencionA;
    this.rfc = rfc;
  }
}
