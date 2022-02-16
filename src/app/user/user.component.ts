import { Component, OnInit } from "@angular/core";
import { UserInterface, UserService } from "../services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  public x = "congratulation";
  public myColor = "dark";
  public myFontWeight = 400;
  public isShown = true;
  public isAgeShown = true;
  public selectedFriend: any;
  public friends: any;

  public user = {
    name: "Vadim",
    age: 31,
  };

  public users: Array<UserInterface> = [];

  constructor(private userService: UserService) {
    setTimeout(() => {
      this.myColor = "light";
      setTimeout(() => {
        this.myColor = "bright";
      }, 1000);
    }, 1000);
  }
  changeFontWeight(weight: number) {
    this.myFontWeight = weight;
  }
  changeName(name: string) {
    this.user.name = name;
  }
  toggleShown() {
    this.isShown = !this.isShown;
  }

  toggleAge() {
    this.isAgeShown = !this.isAgeShown;
  }

  ngOnInit() {
    this.friends = this.userService.getAll();
    this.userService
      .getUsersFromJsonPlaceholder()
      .subscribe((users: Array<UserInterface>) => {
        this.users = users;
        console.log(users);
      });
  }
  removeUser(name: string) {
    this.userService.remove(name);
    this.friends = this.userService.getAll();
  }
  addUser(name: string) {
    // this.userService.add(name);
    this.friends = this.userService.getAll();
  }
}
