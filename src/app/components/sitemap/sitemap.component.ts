import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
  categoryList: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.appService.getCatAndSubCat().subscribe((response) => {
      this.categoryList = response.data;

    }, (error) => {
      alert(error);
    });
  }

}
