import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  private productItem: Observable<ProductItemDetails>;
  private routerSubcriber: any;
  private isConnected: boolean;
  config: any;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private location: Location) {
    this.config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.routerSubcriber = this.route.params.subscribe(params => {
      let productArticle = params['id'];
      this.isConnected = (params['connected'] == 'true');

      this.productItem = this.productService.getProductDetails(productArticle);
    });
  }

  ngOnDestroy() {
    this.routerSubcriber.unsubscribe();
  }

}
