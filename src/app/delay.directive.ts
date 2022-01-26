import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appDelay]",
})
export class DelayDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, 2000);
  }
}
