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

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getUserDetails$(id:number):Observable<any[]> {
    return this.http.get<any[]>(`${this.usersUrl}/${id}`)
  }

  private handleError(err: HttpErrorResponse) {
    let message =
      err.error instanceof ErrorEvent
        ? err.error.message
        : `Server returned code: ${err.status}, error message : ${err.message}`;
    return throwError(message);
  }
}
