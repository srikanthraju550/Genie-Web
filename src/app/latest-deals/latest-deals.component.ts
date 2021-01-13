import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-latest-deals',
  templateUrl: './latest-deals.component.html',
  styleUrls: ['./latest-deals.component.scss']
})
export class LatestDealsComponent implements OnInit {
  latestDeals: any;
  prodData: any;
  action: string;
  product_image_path: any;
  categoryList: any;
  locations: any;
  allData = [];
  location: any;
  image_path: any;
  ramMaxValue;
  public mymodel;
  public searchText;
  constructor(private _Activatedroute: ActivatedRoute, public appService: AppService, public route: Router) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.action = params.get('action');
    });

  }
  ngOnInit(): void {
    this.getCategories();
    this.getLocations();
    if (this.action == 'latest') {
      this.getLatestDetails();

    } else {
      this.getRecommanded();
    }
    setTimeout(() => {
      this.ramMaxValue = Math.max.apply(Math, this.prodData.map(function (o) { return o.price; }));
      console.log('this.ramMaxValue=====', this.ramMaxValue);
    }, 3000);
  }

  getLatestDetails() {

    this.appService.getLatestDeals().subscribe(reponse => {
      this.prodData = reponse.data;
      this.product_image_path = reponse.product_image_path;
      if (this.prodData) {

        this.prodData.forEach(element => {
          if (element.is_wishlist === 'TRUE') {
            element.color = 'red';
          } else {
            element.color = 'black';
          }
        });
      }
    });

  }

  getRecommanded() {
    this.appService.getAllRecommanded().subscribe(reponse => {
      this.prodData = reponse.data;
      this.product_image_path = reponse.product_image_path
      this.allData = this.prodData;
      if (this.prodData) {

        this.prodData.forEach(element => {
          if (element.is_wishlist === 'TRUE') {
            element.color = 'red';
          } else {
            element.color = 'black';
          }
        });
      }
    });


  }

  getCategories() {
    this.appService.getCatAndSubCat().subscribe((response) => {
      this.categoryList = response.data;

    }, (error) => {
      alert(error);
    });
  }

  getLocations() {
    this.appService.getLocation().subscribe(response => {
      this.locations = response.data;
    })
  }

  changeLocation(event) {
    this.locations = event.target.value;
    this.geLocationBasedContent();
  }

  setRange(event) {
    this.prodData = this.allData.filter(prod => parseInt(prod.price) < event);
  }

  geLocationBasedContent() {
    this.allData = [];

    let data = {
      location: this.location
    }
    this.appService.getLocationProducts(data).subscribe(response => {
      this.prodData = response.data;
      this.image_path = response.product_image_path;
      this.allData = this.prodData;
      if (this.prodData) {
        this.prodData.forEach(element => {
          if (element.is_wishlist === 'TRUE') {
            element.color = 'red';
          } else {
            element.color = 'black';
          }
        });
      }
    });



  }

  addwishList(pId) {
    this.allData = [];
    let params = {
      product_id: pId,
      status: 1
    }
    this.appService.addWishList(params).subscribe((response) => {
      this.prodData.forEach(element => {
        if (element.product_id === pId) {
          element.color = 'red';
        }
      });
    }, (error) => {
      alert(error);
    });

  }

  getfiltereData(cId, scId) {
    if (this.action == 'latest') {
      this.getLatestDetails();

    } else {
      this.getRecommanded();
    }
  }

}
