import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  public x = "congratulation";
  public user = {
    name: "Vadim",
    age: 31,
  };
  public myColor = "dark";
  public myFontWeight = 400;
  public isShown = true;
  public friends = [{ name: "Alice" }, { name: "Max" }, { name: "Bob" }];

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

  ngOnInit(): void {}
}
