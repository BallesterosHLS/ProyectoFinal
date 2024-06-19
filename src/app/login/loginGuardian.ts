import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginServiceService } from "../login-service.service";
import { Injectable } from "@angular/core";
@Injectable()
export class loginGuardian implements CanActivate{
    constructor(private router:Router, private loginService:LoginServiceService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.loginService.estaLogueado()){
            return true;
        }
        else{
            this.router.navigate(['/']);
            return false;
        }
    }
    
}