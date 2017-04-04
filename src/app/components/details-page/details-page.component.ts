import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GoodsService } from '../../services/goods.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  private goodsItem: Observable<GoodsItem>;
  private routerSubcriber: any;

  constructor(private route: ActivatedRoute, private goodsService: GoodsService) {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.routerSubcriber = this.route.params.subscribe(params => {
      let productArticle = params['id'];

      this.goodsItem = this.goodsService.getGoodsDetails(productArticle);
    });
  }

  ngOnDestroy() {
    this.routerSubcriber.unsubscribe();
  }

}
