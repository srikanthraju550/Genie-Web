import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
  myPosts: any;
  categoryList: any;
  catId: any;
  subCatId: any;
  product_image_path: any;

  constructor(public appService: AppService,public route:Router) { }

  ngOnInit(): void {
    this.getCategories();
    this.getMyPosts();
  }
  getMyPosts() {
    this.appService.getMyPost().subscribe((response) => {
      this.myPosts = response.data;
      this.product_image_path = response.product_image_path;
    }, (error) => {
      alert(error);
    });
  }

  deleteMyPosts(id) {
    let params = {
      post_id: id
    }
    this.appService.deletePost(params).subscribe((response) => {
      this.myPosts = response.data;
      this.getMyPosts();
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

  // [routerLink]="['/create-post',data.category_id]"
  editPost(data){
    data.imagePath =  this.product_image_path;
   let category = this.categoryList.find(x=>x.name===data.category);
   this.catId = category.category_id;

   let subcat = category.sub_categories.find(y=>y.name===data.sub_category);
   this.subCatId= subcat.sub_category_id;
   this.route.navigate(['/create-post',this.catId + ',' + this.subCatId+','+data.product_id]);
   this.appService.getEditPostData(data);

  }
}
