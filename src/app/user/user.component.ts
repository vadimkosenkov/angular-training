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
  };
  public myColor = "dark";
  public myFontWeight = 400;

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
  // used a method changeName for a variable user
  changeName(name: string) {
    this.user.name = name;
  }

  ngOnInit(): void {}
}
