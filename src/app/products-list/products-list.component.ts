import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  cId: string;
  productsData = [];
  image_path: any;
  location: any;
  categoryList: any;
  showCatFiler: any;
  locations: any;
  ramMaxValue ;
  public mymodel;
  config: any;
  allData=[];
  public searchText;
  collection = [];

  constructor(private _Activatedroute: ActivatedRoute, public appService: AppService, public route: Router) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.cId = params.get('id');
    });
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };

    

    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(`item ${i}`);
    // }

  }
  ngOnInit(): void {
    this.getCategories();
    this.getLocations();
    if (sessionStorage.getItem('user_info') != undefined) {
      if (this.cId != 'location') {
        this.getProductList();
      }
    } else {
      alert('Please Do Login');
    }

    this.appService.dataSource.subscribe(res => {
      this.location = res;
      if(this.location!=undefined &&  this.location!=''){
        this.geLocationBasedContent();

      }
    });

    setTimeout(()=>{
     this.ramMaxValue = Math.max.apply(Math, this.productsData.map(function(o) { return o.price; }))
    },6000);

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }



  geLocationBasedContent() {
    this.allData=[];

    let data = {
      location: this.location
    }
    this.appService.getLocationProducts(data).subscribe(response => {
      this.productsData = response.data;
      this.image_path = response.product_image_path;
      this.allData = this.productsData;
      if (this.productsData) {
        this.productsData.forEach(element => {
          if (element.is_wishlist === 'TRUE') {
            element.color = 'red';
          } else {
            element.color = 'black';
          }
        });
      }
    });

   

  }

  getProductList() {

    let data = {
      category_id: this.cId.split(',')[0],
      sub_category_id: this.cId.split(',')[1]
    }
    this.appService.getProductsList(data).subscribe(response => {
      this.productsData = response.data;
      this.image_path = response.product_image_path;
      this.allData = this.productsData;
      if (this.productsData) {
        this.productsData.forEach(element => {
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
    this.allData=[];
    let params = {
      product_id: pId,
      status: 1
    }
    this.appService.addWishList(params).subscribe((response) => {
      this.productsData.forEach(element => {
        if (element.product_id === pId) {
          element.color = 'red';
        }
      });
    }, (error) => {
      alert(error);
    });

  }

  getCategories() {
    this.appService.getCatAndSubCat().subscribe((response) => {
      this.categoryList = response.data;

    }, (error) => {
      alert(error);
    });
  }
  showCat() {
    this.showCatFiler != this.showCatFiler;
  }

  getfiltereData(cId, scId) {
    this.cId = cId + ',' + scId;
    this.getProductList();
  }

  getLocations() {
    this.appService.getLocation().subscribe(response => {
      this.locations = response.data;
    })
  }

  changeLocation(event) {
    this.location = event.target.value;
    this.geLocationBasedContent();
  }

  setRange(event) {
    this.productsData =  this.allData.filter(prod => parseInt(prod.price) < event);
  }

  
}
