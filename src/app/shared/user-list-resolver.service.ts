import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserListResolverService implements Resolve<any[]> {

  constructor(private productService: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> {
    return this.productService.getProducts().pipe(
      map(products => products),  
      catchError(err => { throw 'error in source. Details: ' + err })
      );
  }
}
