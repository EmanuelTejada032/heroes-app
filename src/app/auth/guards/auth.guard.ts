import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router){}

  //prevent modules from being activated
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      
      return this.authService.verifyAuthUser()
                 .pipe(
                   tap( isAuth => {
                     if(!isAuth){
                       console.log("blocked by canActivate")
                       this.router.navigate(["/auth/login"])
                     }
                   })
                 );
      // if(this.authService.auth.id){
      //   return true;
      // }
      // console.log("Locked by authGuard - canActivate")
      // return false;
  }

  // Prevent modules from being charged, but not activated once charged
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

      return this.authService.verifyAuthUser()
      .pipe(
        tap( isAuth => {
          if(!isAuth){
            console.log("blocked by canLoad")
            this.router.navigate(["/auth/login"])
          }
        })
      );
      // if(this.authService.auth.id){
      //   return true;
      // }
      // console.log("Locked by authGuard - canLoads")
      // return false;
      
    
  }
}
