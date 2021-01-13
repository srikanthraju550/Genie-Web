import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListData: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.getWishList();
  }
  getWishList(){
    this.appService.getWishList().subscribe((response) => {
      this.wishListData = response.data;
    }, (error) => {
      alert(error);
    });
  }

  delete(pid){
    let params={
      product_id: pid,
      status:0
    }
    this.appService.addWishList(params).subscribe((response) => {
      this.wishListData = response.data;
      this.getWishList();
    }, (error) => {
      alert(error);
    });
  }
}
