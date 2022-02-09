import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private friends = [
    { name: "Alice", age: 22 },
    { name: "Max", age: 24 },
    { name: "Bob", age: 26 },
  ];

  constructor() {}

  public getAll() {
    return this.friends;
  }
}
