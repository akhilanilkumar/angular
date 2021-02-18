import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  VERSION
} from "@angular/core";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  
  constructor() {
  }
}
