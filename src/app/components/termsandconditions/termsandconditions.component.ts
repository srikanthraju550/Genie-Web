import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.scss']
})
export class TermsandconditionsComponent implements OnInit {
  termsAndCondtionsData: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.getAboutUs();
  }

  getAboutUs(){
    this.appService.getContent().subscribe((response) => {
      this.termsAndCondtionsData = response.data[0].disclaimer;

    }, (error) => {
      alert(error);
    });
  }
}
