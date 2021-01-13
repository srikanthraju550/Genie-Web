import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private SpinnerService: NgxSpinnerService){
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    window.scroll(0, 0);
    /** spinner starts on init */
    this.SpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.SpinnerService.hide();
    }, 2000);
  }
}
