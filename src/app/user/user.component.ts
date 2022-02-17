import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  id: any = "";
  constructor(private route: ActivatedRoute, private routes: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
