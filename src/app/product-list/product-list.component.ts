import { User } from './../shared/users';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from "@angular/router";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  productList: User[];
  loading: boolean = false;

  showGeo(id: number) {
    this.route.navigate([`/users`, id]);
  }

  ngOnInit() {
    this.route.events.subscribe((e: RouterEvent) => {
      this.loading = e instanceof NavigationStart ? true : false;
    })
    this.activatedRoute.data.subscribe(data => { this.productList = data['products'] });
  }
}
