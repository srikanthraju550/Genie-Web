import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponent implements OnInit {
  sId: string;
  sellerDetails: any;
  sellerProducts=[];
  product_image_path: any;
  image_path: any;

  constructor(private _Activatedroute: ActivatedRoute, public appService: AppService) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.sId = params.get('id');
    });

  }

  ngOnInit(): void {
    this.getSellerDetails();
  }

  getSellerDetails() {
    let params = {
      seller_id: this.sId
    }
    this.appService.getSellerProfile(params).subscribe((response) => {
      this.sellerDetails = response.data;
      this.sellerProducts = response.seller_products;
      this.product_image_path=response.product_image_path;
      this.image_path=response.image_path;
    }, (error) => {
      alert(error);
    });
  }

}
