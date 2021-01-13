import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  subCategoryList: any;
  image_path: any;
  constructor(public appService: AppService,) { }
  categoryList: any;
  categoryId:any;

  ngOnInit(): void {
    this.getCategories();

  }
  getCategories() {
    this.appService.getCategories().subscribe((response) => {
      this.categoryList = response.data;
this.image_path= response.image_path;
    }, (error) => {
      alert(error);
    });
  }

  getSubCat(catId){
    this.subCategoryList =[];
    this.categoryId=catId;
    this.appService.getSubCategories(catId).subscribe((response) => {
     response.data.forEach(element => {
       if(element.category_id==catId){
        this.subCategoryList.push(element);
       }
     });
    }, (error) => {
      alert(error);
    });
  }
}
