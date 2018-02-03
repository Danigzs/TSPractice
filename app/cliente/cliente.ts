export class Cliente {
  _id: number;
  name: String;
  businessName: String;
  address: String;
  state: String;
  town: String;
  district: String;
  country: String;
  postalCode: String;
  phone: String;
  email: String;
  attentTo: String;
  rfc: String;
  code: String

  constructor() {
     
    this.code = "";
    this.name = "";
    this.businessName = "";
    this.address= "";
    this.state= "";
    this.town = "";
    this.district = "";
    this.country = "";
    this.postalCode = "";
    this.phone = "";
    this.email = "";
    this.attentTo = "";
    this.rfc = "";
    this._id = 0;
  } 

  setCliente( _id:number, code:string,name:string,businessName:string,address:string,state:string,town:string,district:string,country:string,postalCode:string,phone:string,email:string,attentTo:string,rfc:string){
    this.code = code;
    this.name = name;
    this.businessName = businessName;
    this.address = address;
    this.state = state;
    this.town = town;
    this.district = district;
    this.country = country;
    this.postalCode = postalCode;
    this.phone = phone;
    this.email = email;
    this.attentTo = attentTo;
    this.rfc = rfc;
    this._id = _id;
  }
}
