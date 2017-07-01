export class Role {
  id: number;
  name: String;
  constructor() {
    this.id = -1;
    this.name = "";
  }
  seRole(id:number,name:String) {
    this.id = id;
    this.name = name;
  }

}
