import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from './users';

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  // private usersUrl = "https://jsonplaceholder.typicode.com/users";
  
  private usersUrl = '/api/users'
  private isDisplayed = false;
  getProducts$(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserDetails$(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
  }

  get isMessageDisplayed(){
    return this.isDisplayed;
  }

  set isMessageDisplayed(isMessage:boolean) {
    this.isDisplayed = isMessage;
  }
}
