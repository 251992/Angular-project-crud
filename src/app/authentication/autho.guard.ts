import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthoService } from './autho.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {

constructor(private _authoService:AuthoService, private _router:Router){
if(!_authoService.GetAuthenticate()){
  _router.navigate(["/login"])
}
}
  


canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authoService.GetAuthenticate();
  }
  
}
