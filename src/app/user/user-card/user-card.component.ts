import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() friend: any;
  @Input() isAgeShown: any;
  @Input() toggleAge: any;
  @Output() friendSelected: EventEmitter<any> = new EventEmitter();

  constructor() {}

  selectFriend() {
    this.friendSelected.emit();
  }

  ngOnInit(): void {}
}
