export class Role {
  _id: number;
  name: String;
  constructor() {
    this._id = -1;
    this.name = "";
  }
  seRole(_id:number,name:String) {
    this._id = _id;
    this.name = name;
  }

}
