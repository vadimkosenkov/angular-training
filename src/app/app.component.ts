import { UserService } from "./user.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-training";
  constructor(private userService: UserService) {}

  getNumber(): number {
    return this.userService.getRandomNumber();
  }
}
