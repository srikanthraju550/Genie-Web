import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
