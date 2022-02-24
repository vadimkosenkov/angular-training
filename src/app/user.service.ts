import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface User {
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getOne(userId: Number): Observable<User> {
    return this._http.get<User>(`/user/${userId}`);
  }

  getAll(): Observable<User[]> {
    return this._http.get<User[]>(`/users`);
  }
}
