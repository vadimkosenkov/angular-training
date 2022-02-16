import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  private friends = [
    { name: "Alice", age: 22 },
    { name: "Max", age: 24 },
    { name: "Bob", age: 26 },
  ];

  constructor(private _http: HttpClient) {}

  public getAll() {
    return this.friends;
  }

  public getUsersFromJsonPlaceholder(): Observable<Array<UserInterface>> {
    return this._http.get<Array<UserInterface>>("https://jsonplaceholder.typicode.com/users");
  }

  public remove(name: string) {
    return (this.friends = this.friends.filter((friend) => friend.name !== name));
  }
  public add(name: string, age: number) {
    if (!name || !age) return;
    this.friends.push({ name, age });
  }
}
