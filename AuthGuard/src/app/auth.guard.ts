import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loginValue = localStorage.getItem("isLogin");
   
  canActivate():any{
    if(this.loginValue){
     return true;
    }
    else{
     return false;
    }
  }
  
}
