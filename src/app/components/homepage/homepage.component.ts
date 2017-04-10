import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public productList: Observable<ProductItem[]>;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.productList = this.productService.getProductList();
  }
}
