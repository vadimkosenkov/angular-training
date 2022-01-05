import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  // new decorator Input with import from "@angular/core"
  @Input() user: any;

  constructor() {
    console.log(this.user); // undefined
  }

  ngOnInit(): void {
    console.log(this.user); // correct value
  }
}
