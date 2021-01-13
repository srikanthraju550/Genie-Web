import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  supportData: any;
  sIndex: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.getAboutUs();
  }

  getAboutUs(){
    this.appService.getSupportData().subscribe((response) => {
      this.supportData = response.data;

    }, (error) => {
      alert(error);
    });
  }

  getSupportData(index){
    this.sIndex = index;
  }

}
