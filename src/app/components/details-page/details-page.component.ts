import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  private productItem: Observable<ProductItemDetails>;
  private relatedProductsList: Observable<ProductItem[]>;
  private routerSubcriber: any;
  private isConnected: boolean;
  private mainSwiperConfig: any;
  private thumbnailsSwiperConfig: any;

  @ViewChild('mainSwiper') mainSwiper;
  @ViewChild('thumbnailsSwiper') thumbnailsSwiper;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private location: Location,
              private router: Router,
              private cdr: ChangeDetectorRef) {
    this.mainSwiperConfig = {
            paginationClickable: true,
            spaceBetween: 30,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        };
    this.thumbnailsSwiperConfig = {
            spaceBetween: 0,
            centeredSlides: true,
            slidesPerView: 3,
            slideToClickedSlide: true
    }
  }

  ngOnInit() {

    this.routerSubcriber = this.route.params.subscribe(params => {
      let productArticle = params['id'];
      this.isConnected = (params['connected'] == 'true');

      this.productItem = this.productService.getProductDetails(productArticle);

      this.relatedProductsList = this.productService.getRelatedProducts(productArticle);

      this.cdr.detectChanges(); // For update screen, when navigate on the same route
    });
    
  }

  ngAfterViewInit() {
    /* Swiper connetc thumbnail control with slider control */
    this.mainSwiper.Swiper.params.control = this.thumbnailsSwiper.Swiper;
    this.thumbnailsSwiper.Swiper.params.control = this.mainSwiper.Swiper;

  }

  getWindowWidth() {
    /* Calculate slider size */
    return window.innerWidth - 120;
  }

  ngOnDestroy() {
    this.routerSubcriber.unsubscribe();
  }

  goHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }

  goBack() {
    this.location.back();
  }

  openRelatedProductDetails(article) {
    let link = ['/details', article, true];
    this.router.navigate(link);
  }

}
