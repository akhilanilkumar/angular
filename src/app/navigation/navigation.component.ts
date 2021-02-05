import { Router } from '@angular/router';
import { ProductsService } from './../shared/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  toggleMessages(): void {
    this.router.navigate([{
      outlets: {
        popup: ['messages']
      }
    }]);
    this.productService.isMessageDisplayed = !this.productService.isMessageDisplayed;
    if(!this.productService.isMessageDisplayed) {
      this.router.navigate([{
        outlets: {
          popup: null
        }
      }]);
    }
  }

}