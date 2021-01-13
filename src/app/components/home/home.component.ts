import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeContent: any;
  bannerImgPath: any;
  banners: any;
  latestDeals = [];
  latestDealspath: any;
  recomendedDeals = [];
  dealsPath: any;
  hideLatestDetailsMore: boolean = true;
  hideRecommendedDetailsMore: boolean = true;
  location: any;
  aboutUsData: any;
  reportAdds: any;
  banner_path: any;

  constructor(public appService: AppService, public route: Router) { }

  ngOnInit(): void {
    this.getHomecontent();
    this.adBanners();

    
    
  }


  

  getHomecontent() {
    this.appService.getHomeContent().subscribe((response) => {
      this.homeContent = response.data;
      this.banners = this.homeContent.banners;

      this.bannerImgPath = this.homeContent.banners_path;
      this.dealsPath = this.homeContent.product_image_path;

      this.homeContent.latest_deals.forEach((element, i) => {
        if (i < 4) {
          this.latestDeals.push(element);
        }
      });
      this.homeContent.recommended_deals.forEach((element, i) => {
        if (i < 4) {
          this.recomendedDeals.push(element);
        }
      });
      this.latestDeals.forEach(element => {
        if (element.is_wishlist === 'TRUE') {
          element.color = 'red';
        } else {
          element.color = 'black';
        }
      });

      this.recomendedDeals.forEach(element => {
        if (element.is_wishlist === 'TRUE') {
          element.color = 'red';
        } else {
          element.color = 'black';
        }
      });
    });
  }



  addwishList(pId) {

    let params = {
      product_id: pId,
      status: 1
    }
    this.appService.addWishList(params).subscribe((response) => {
      this.latestDeals.forEach(element => {
        if (element.product_id === pId) {
          element.color = 'red';
        }
      });

      this.recomendedDeals.forEach(element => {
        if (element.product_id === pId) {
          element.color = 'red';
        }
      });
    }, (error) => {
      alert(error);
    });
  }

  viewLatestDeals() {
    this.route.navigate(['/latest-deals', 'latest']);
  }

  viewRecommanded() {
    this.route.navigate(['/latest-deals', 'recommanded']);

  }


  adBanners(){
    this.appService.getAddBanners().subscribe((response) => {
      this.reportAdds = response.data;
      this.banner_path = response.image_path;
     
    }, (error) => {
      alert(error);
    });
  }
  
}
