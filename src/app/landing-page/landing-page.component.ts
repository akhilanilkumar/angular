import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  observable: Observable<number>;

  constructor() {
    this.observable = this.getObservable();
  }

  getObservable(): Observable<number> {
    return interval(1000).pipe(take(100))
  }

  clicked() {

  }
}