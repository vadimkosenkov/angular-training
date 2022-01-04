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
  public myColor = "color-dark";

  constructor() {
    // changing the value of a variable myColor
    setTimeout(() => {
      this.myColor = "color-light";
      setTimeout(() => {
        this.myColor = "color-bright";
      }, 2000);
    }, 2000);
  }

  ngOnInit(): void {}
}
