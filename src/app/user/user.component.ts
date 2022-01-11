import { Component, OnInit } from "@angular/core";

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
  public user = {
    name: "Vadim",
    age: 31,
  };
  public friends = [
    { name: "Alice", age: 22 },
    { name: "Max", age: 24 },
    { name: "Bob", age: 36 },
  ];

  constructor() {
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
  ngOnInit(): void {}
}
