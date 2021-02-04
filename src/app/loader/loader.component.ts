import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent {
  @Input("value") val;
  @Input('loading') loading:boolean;
  @Output("notification") notify: EventEmitter<number> = new EventEmitter<
    number
  >();

  showGeo() {
    this.notify.emit(this.val);
  }
}
