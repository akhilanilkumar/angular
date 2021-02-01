import { Component, Input, OnInit } from "@angular/core";
import { ProductsService } from "../shared/products.service";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  productList: any[];

  showGeo(geo: object) {
    console.log(geo);
  }

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(
        data => (this.productList = data),
        error => console.log(error)
      );
  }
}
