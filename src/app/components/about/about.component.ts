import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutUsData: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.getAboutUs();
  }

  getAboutUs(){
    this.appService.getContent().subscribe((response) => {
      this.aboutUsData = response.data[0].about_us;

    }, (error) => {
      alert(error);
    });
  }

  
}
