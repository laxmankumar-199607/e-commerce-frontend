import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  itemList: any = [];
  activeItemList: any = [];


  private apiServer = 'http://localhost:8080';
  private baseUrl = '/ecom';

  constructor(private httpClient: HttpClient) {}

  getAllCategories() {
    return this.httpClient.get(this.apiServer + this.baseUrl + '/category/all');
  }

  getAllItemsByCategory(categoryId: number) {
    let params = new HttpParams();
    params = params.append('categoryId', categoryId);
    return this.httpClient.get(
      this.apiServer + this.baseUrl + '/item/by/category',
      {
        params: params,
      }
    );
  }



  public getActiveItems(itemDTO : any){

    return this.httpClient.put(this.apiServer + this.baseUrl +'/item/isactive', itemDTO )
  }
}
