
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  RegisterService
} from './register.service';
import {
  RoleService
} from './../roles/role.service';
import {
  Role
} from './../roles/role';
import {
  User
} from './user';

@Component({
  selector: 'register',
  providers: [RoleService],
  templateUrl: "app/register/register.html",
  styleUrls: ["app/register/register.css", "app/styles/table.css"]

})
export class RegisterComponent implements OnInit {
  roles: Array < Role > ;
  user: User = new User;
  roleSelected = new Role;
  constructor(private _rolesService: RoleService, private _registerService:RegisterService) {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._rolesService.getRoles().subscribe(
        data => {
            this.roles = data;
            if(this.roles.length > 0){
                this.roleSelected = this.roles[0];
            }
        }
    );
  }


  register(){
      this.user.role = this.roleSelected;
    this._registerService.register(this.user).subscribe(
        data=>{
            console.log(data);
        }
    )
  }



}
