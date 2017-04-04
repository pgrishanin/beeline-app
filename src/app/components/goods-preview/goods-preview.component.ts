import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-goods-preview',
  templateUrl: './goods-preview.component.html',
  styleUrls: ['./goods-preview.component.css']
})
export class GoodsPreviewComponent implements OnInit {

  @Input() goods: GoodsItem;

  constructor() { }

  ngOnInit() {
  }

}
