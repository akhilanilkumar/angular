import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../shared/products.service";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductsService, private route: Router, private activatedRoute:ActivatedRoute) {}

  productList: any[];

  showGeo(id: number) {
    // console.log(geo);
    this.route.navigate([`/users`, id]);
  }

  ngOnInit() {
    this.productList = this.activatedRoute.snapshot.data['products'];
  }
}
