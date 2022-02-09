import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

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

  ngOnInit(): void {
    this.friends = this.userService.getAll();
  }
}
