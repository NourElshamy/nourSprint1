import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {89

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  getProducts(){
    return this._http.get("http://localhost:3000/api/product/getProducts")
      .map(result => this.result = result.json().data);
  }
  deleteProduct(product){
    return this._http.delete("http://localhost:3000/api/product/deleteProduct/"+product._id)
      .map(result => this.result = result.json().data);
  }
  createProduct(product){
      return this._http.post("http://localhost:3000/api/product/createProduct/",product)
      .map(result => this.result = result.json().data);
  }
  updateProduct(product,newp){
    return this._http.patch("http://localhost:3000/api/product/updateProduct/"+product._id,newp)
    .map(result => this.result = result.json().data);
  }
}

