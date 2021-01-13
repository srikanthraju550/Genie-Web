import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  disclaimerData: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.getAboutUs();
  }

  getAboutUs(){
    this.appService.getContent().subscribe((response) => {
      this.disclaimerData = response.data[0].disclaimer;

    }, (error) => {
      alert(error);
    });
  }

}
