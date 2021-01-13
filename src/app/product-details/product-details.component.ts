import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;

  map: google.maps.Map;
  pId: string;
  productDetails: any;
  product_image_path: any;
  relatedProd: any;
  reportAdKeys: any;
  radioValue: any;
  
  @ViewChild('hideReportsModal') hideReportsModal;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  lat = 0.000000;
  lang = 0.000000;
  coordinates = new google.maps.LatLng(this.lat, this.lang);

  constructor(private _Activatedroute: ActivatedRoute, public appService: AppService, public route: Router) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.pId = params.get('id');
    });

  }

  ngOnInit(): void {
    this.getProductDetails();
    this.getReportAdKeyword();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.mapIntializer();
    }, 4000)
  }

  mapIntializer() {
    const labels = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
    console.log('this.coordinates====',this.coordinates);

    var mapOptions: google.maps.MapOptions = {
      center: this.coordinates,
      zoom: 1,
      streetViewControl: false,
      scaleControl: false,
      mapTypeControl: false
    }

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

  }

  getProductDetails() {
    let params = {
      product_id: this.pId
    }
    var inData = "product_id=" + this.pId
    this.appService.getProductDetails(inData).subscribe((response) => {
      this.product_image_path = response.product_image_path;
      
      this.productDetails = response.data[0];
      this.relatedProd = response.related_ads;
      if (this.productDetails.is_wishlist === 'TRUE') {
        this.productDetails.color = 'red';
      } else {
        this.productDetails.color = 'black';
      }

      this.relatedProd.forEach(element => {
        if (element.is_wishlist === 'TRUE') {
          element.color = 'red';
        } else {
          element.color = 'black';
        }
      });

      let lat = this.productDetails.latitude;
    // 
      let lang = this.productDetails.longitude;
      this.coordinates  = new google.maps.LatLng(parseFloat(lat),parseFloat(lang));
      this.mapIntializer();
    }, (error) => {
      alert(error);
    });

    
  }

  addwishList(pId) {

    let params = {
      product_id: pId,
      status: 1
    }
    this.appService.addWishList(params).subscribe((response) => {
      if (this.productDetails.product_id === pId) {
        this.productDetails.color = 'red';
      }
    }, (error) => {
      alert(error);
    });

    this.getProductDetails();
  }

  getReportAdKeyword() {
    this.appService.reportAdKeywords().subscribe((response) => {
      this.reportAdKeys = response.data;
    }, (error) => {
      alert(error);
    });
  }

  reportAd() {
    var params = {
      product_id: this.pId,
      keyword: this.radioValue
    }
    this.appService.reportAd(params).subscribe((response) => {
      this.hideReportsModal.nativeElement.click();
      alert('Reported Successfully');
    }, (error) => {
      alert(error);
    });
  }

}
