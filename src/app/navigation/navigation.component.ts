import { Router } from '@angular/router';
import { ProductsService } from './../shared/products.service';
import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,AfterContentInit, AfterViewInit {

  constructor(private productService: ProductsService, private router: Router) { }
  @ContentChild('item') navigation;
  ngAfterContentInit(): void {
    console.log(this.navigation)
  }
  ngAfterViewInit(): void {
    console.log(this.navigation)
  }

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