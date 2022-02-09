import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import { DynamicItemComponent } from "./dynamic-item/dynamic-item.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "angular-training";

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    setTimeout(() => {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          DynamicItemComponent
        );
      const componentRef =
        this.viewContainerRef.createComponent(componentFactory);
    }, 3000);
  }
}
