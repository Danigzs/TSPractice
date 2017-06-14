export class Seller {
  _id: String;
  name: string;
  store: string;
  address: string;
  phone: string;
  email: string;  
  rfc: string;
  code: string;
  constructor() {
    this.name = "";
    this.store = "";
    this.address = "";
    this.phone = "";
    this.email = "";
    this.rfc = "";
    this.code = "";
  } 
  setSeller(name:string,store:string,address:string,phone:string,email:string,rfc:string,code:string){
    this.name = name;
    this.store = store;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.rfc = rfc;
    this.code = code;

  }
  copyNewSeller(){
    var _seller = new Seller();
    _seller.name = this.name;
    _seller.store = this.store;
    _seller.address = this.address;
    _seller.phone = this.phone;
    _seller.email = this.email;
    _seller.rfc = this.rfc;
    _seller.code = this.code;
    
    return _seller
  }
}
