import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsService } from "./products.service";

@Injectable()
export class UserResolverService implements Resolve<any[]> {
  constructor(private productService: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> {
    return this.productService.getUserDetails$(+route.params['id']).pipe(
      map(data => data),
      catchError(err => { throw 'error in source. Details: ' + err })
    );
  }

}
