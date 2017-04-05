import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const PRODUCT_LIST_JSON: string = './assets/json/test-product-list.json';
const PRODUCT_DETAILS_JSON: string = './assets/json/test-product-';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  public getProductList(): Observable<ProductItem[]> {
    return this.http.request(PRODUCT_LIST_JSON)
                 .map(res => {
                   let list: ProductItem[] = [];
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

  public getProductDetails(article: string): Observable<ProductItemDetails> {
    return this.http.request(PRODUCT_DETAILS_JSON + article + '.json')
                 .map(res => {
                   let productItem: ProductItemDetails;
                    if (res.json() && Array.isArray(res.json())) {
                      res.json().map((item) => {
                        productItem = {
                          article: item.article,
                          description: item.description,
                          fields: item.fields,
                          images: item.images.map((image) => {
                            return image.image;
                          }),
                          name: item.name,
                          price: item.price
                        };
                      })
                    }
                    return productItem;
                 })
                 .catch((error:any) => {
                    console.error(error);
                    return Observable.throw(error.json().error || 'Server error');
                 });
  }

  public getRelatedProducts(article: string): Observable<ProductItem[]> {
    let articleArr = article.split("-");
    return this.getProductList().map(res => {
      console.log(res);
      return res;
    })
  }
  

}
