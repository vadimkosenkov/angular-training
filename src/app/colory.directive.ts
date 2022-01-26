import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appColory]",
  exportAs: "colory",
})
export class ColoryDirective {
  private counter: number = 0;

  //декоратор HostBinding служит для обновления свойств элемента, но который повесили директиву
  @HostBinding("style.color") myColor: string;
  //декоратор HostListener служит для обработки событий элемента, но который повесили директиву
  @HostListener("click", ["$event"]) changeColor() {
    this.setRandomColor();
    this.counter++;
    console.log(this.counter);
  }

  setRandomColor() {
    this.myColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  constructor() {
    this.myColor = "red";
    setTimeout(() => {
      this.myColor = "green";
    }, 2000);
  }
}
