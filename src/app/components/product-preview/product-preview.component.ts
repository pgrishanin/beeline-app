import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product: ProductItem;

  constructor() { }

  ngOnInit() {
  }

}
