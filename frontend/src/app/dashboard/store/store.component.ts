import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
products: Array<any>;
  constructor(private _storeService: StoreService) { 
  this._storeService.getProducts().subscribe(res => this.products = res);
  }
  deleteProduct(product){
    this._storeService.deleteProduct(product)
    .subscribe((res:any)=>{ 
      this._storeService.getProducts().subscribe(res => this.products = res)
    });
  }
  updateProduct(product,name1, price1){
    var update={
      name:name1,
      price:price1
    };
    console.log(name1);
    console.log(price1);

    this._storeService.updateProduct(product,update)
    .subscribe((res:any)=>{ 
      this._storeService.getProducts().subscribe(res => this.products = res)
    });
  }
  createProduct(name,price){
    var product={
      name:name,
      price:price
    };
    this._storeService.createProduct(product).subscribe(res => this.products = res);
      }

ngOnInit(){

}
}



