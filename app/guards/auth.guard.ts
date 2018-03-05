import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from '../register/user'  
@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router) { }
    // adminRoutes = [''];
    adminRoutes = ['/nuevoproducto','/register','/bordadoreport','/verreportes','/payment','/tecnicas','/sellers','/categorias','/disenoreport'];
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user')) {
            // logged in so return true
            var user = localStorage.getItem("user");
            user = JSON.parse(user);

            if(this.adminRoutes.indexOf(state.url) == -1)
            {
                return true;
            }
            if( user.role._id != 1 ){
                //this.router.navigate(['/denied']);
                //return false;
            }
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
