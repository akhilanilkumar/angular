import { User } from './../shared/users';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router, Event, NavigationCancel, NavigationError, NavigationEnd } from "@angular/router";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
    this.route.events.subscribe((e: Event) => {
      if (e instanceof NavigationStart)
        this.loading = true;
      else if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError)
        this.loading = false;
    })
  }

  productList: User[];
  loading: boolean = false;

  showGeo(id: number) {
    this.route.navigate([`/users`, id]);
  }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data => { this.productList = data['products'] });
  }
}
