import { Component, OnInit } from '@angular/core';

import { GoodsService } from '../../services/goods.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public goodsList: Observable<GoodsItem[]>;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.goodsList = this.goodsService.getGoodsList();
  }

}
