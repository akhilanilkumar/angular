import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  VERSION
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  name = "Angular " + VERSION.major;
  constructor() {
    console.clear();
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
