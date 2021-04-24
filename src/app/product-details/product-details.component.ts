import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  showData:any;
  constructor(public common:CommonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      //console.log(id);
      this.details(id)
    });
    
   }

  ngOnInit(): void {
  }

  details(id:any){
    //console.log("dataVal",id);
    var url="product/details?Id="+id;
    this.common.get(url).subscribe(data => {  
      this.showData = JSON.parse(data)['product'];
      //console.log("this.showData",this.showData.name)
    });
  }
}
