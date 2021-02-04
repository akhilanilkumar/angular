import { User } from './users';
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
export class UserResolverService implements Resolve<User> {
  constructor(private productService: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    return this.productService.getUserDetails$(+route.params['id']).pipe(
      map(data => data),
      catchError(err => { throw 'error in source. Details: ' + err })
    );
  }

}
