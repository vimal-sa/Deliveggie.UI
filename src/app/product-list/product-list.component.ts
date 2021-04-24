import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

productList=null;
  constructor(public common:CommonService,private router:Router) {
    this.getProductList();
   }

  ngOnInit(): void {
  }

  getProductList(){
    var url="product";
    this.common.get(url).subscribe(data => {     
      //console.log(JSON.parse(data));
      this.productList = JSON.parse(data);
    });
  }

  showDetailView(val:any){
    this.router.navigateByUrl("/product_details?id="+val.id);
  }

}
