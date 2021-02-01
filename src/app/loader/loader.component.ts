import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent {
  @Input("value") val;
  @Output("notification") notify: EventEmitter<object> = new EventEmitter<
    object
  >();

  showGeo() {
    this.notify.emit(this.val);
  }
}
