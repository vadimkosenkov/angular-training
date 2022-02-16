import { UserService } from "./user.service";
import { InjectionToken, NgModule, ReflectiveInjector, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// const API_BASE_URL = 'api.mysite.com' // sample
// const API_BASE_URL = new InjectionToken<string>("API_BASE_URL"); // for example with useValue
const injector: Injector = ReflectiveInjector.resolveAndCreate([{ provide: UserService, useClass: UserService }]);
const userService = injector.get(UserService);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  HttpClientModule
  ],
  providers: [
    // {token, recipe} // sample
    // { provide: UserService, useClass: UserService }, // VERSION_ONE. full useClass
    UserService, // short version useClass (with same names)
    // { provide: API_BASE_URL, useValue: "api.mysite.com" }, // VERSION_TWO. useValue
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
