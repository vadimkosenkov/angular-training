import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  //new variable
  public x = "congratulation";
  //new variable
  public user = {
    name: "Vadim",
  };
  //new style variable
  public myColor = "dark";
  //new style variable
  public myFontWeight = 400;

  constructor() {
    // changing the value of a variable myColor
    setTimeout(() => {
      this.myColor = "light";
      setTimeout(() => {
        this.myColor = "bright";
      }, 1000);
    }, 1000);
  }
  // changing the value of a variable myFontWeight(type number)
  changeFontWeight(weight: number) {
    this.myFontWeight = weight;
  }

  ngOnInit(): void {}
}
