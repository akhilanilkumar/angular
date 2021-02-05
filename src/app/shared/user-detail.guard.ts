import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class UserDetailGuard implements CanActivate {
  
  constructor(private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.paramMap.get('id');
    if(isNaN(id)) {
      console.error("Invalid used id");
      this.route.navigate(['/users'])
      return true;
    }
    return true;
  }
}
