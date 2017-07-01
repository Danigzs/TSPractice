import {
  Role
} from "../roles/role";

export class User {

  id: number;
  name: String;
  username: String;
  password: String;
  email: String;
  role: Role;
  constructor() {
    this.id = -1;
    this.name = "";
    this.username = "";
    this.password = "";
    this.email = "";
    this.role = new Role;
  }
  setUser(id: number, name: string, username: string, password: string, email: string, role: Role) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }

}
