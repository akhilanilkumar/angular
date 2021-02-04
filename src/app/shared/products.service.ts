import { User } from './users';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private usersUrl = "https://jsonplaceholder.typicode.com/users";

  getProducts(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserDetails$(id:number):Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
  }

  private handleError(err: HttpErrorResponse) {
    let message =
      err.error instanceof ErrorEvent
        ? err.error.message
        : `Server returned code: ${err.status}, error message : ${err.message}`;
    return throwError(message);
  }
}
