import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {

  constructor(private auth: AuthService, private users: UsersService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.user.pipe(
        take(1),
        map(user => user && this.users.canRead(user) ? true : false), // <-- important line
        tap(canView => {
          if (!canView) {
            console.error('Access denied. Must have permission to view content')
          }
        })
      );
  }
  
}
