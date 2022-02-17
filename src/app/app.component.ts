import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-training";
  constructor(private router: Router) {}

  clickFunc() {
    this.router.navigateByUrl("users/some-user");
  }
}
