import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GoodsService {

  constructor(private http: Http) { }

  public getGoodsList(): Observable<GoodsItem[]> {
    return this.http.request('./assets/json/test-product-list.json')
                 .map(res => {
                   let list: GoodsItem[] = [];
                    if (res.json() && Array.isArray(res.json())) {
                      res.json().map((item) => {
                        list.push({
                          images: item.images.map((image) => {
                            return image.image;
                          }),
                          article: item.article,
                          price: item.price,
                          name: item.name
                        });
                      })
                    }
                    return list;
                 })
                 .catch((error:any) => {
                    console.error(error);
                    return Observable.throw(error.json().error || 'Server error');
                 });
  }
  

}
