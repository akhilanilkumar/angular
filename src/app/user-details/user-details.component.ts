import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../shared/products.service";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  user;
  constructor(private route: ActivatedRoute, private productService:ProductsService) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }
}
