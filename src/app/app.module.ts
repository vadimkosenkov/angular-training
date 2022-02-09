import { UserService } from "./services/user.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserComponent } from "./user/user.component";
import { UserCardComponent } from "./user/user-card/user-card.component";
import { ItemComponent } from "./item/item.component";
import { ColoryDirective } from "./colory.directive";
import { DelayDirective } from "./delay.directive";
import { DynamicItemComponent } from "./dynamic-item/dynamic-item.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
    DelayDirective,
    DynamicItemComponent,
  ],
  entryComponents: [DynamicItemComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
