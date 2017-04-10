import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-responsive-product-list',
  templateUrl: './responsive-product-list.component.html',
  styleUrls: ['./responsive-product-list.component.css']
})
export class ResponsiveProductListComponent implements OnInit {

  @Input() productsList: Observable<ProductItem[]>;
  @Input() listTitle: string;
  @Input() isRelated: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openRelatedProductDetails(article) {
    let link = this.isRelated ? ['/details', article, 'related'] : ['/details', article];
    this.router.navigate(link);
  }

}
