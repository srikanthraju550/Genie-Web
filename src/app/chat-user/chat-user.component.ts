import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.scss']
})
export class ChatUserComponent implements OnInit {
  cId: string;
  message: any;

  constructor(private _Activatedroute: ActivatedRoute, public appService: AppService) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.cId = params.get('id');
    });

  }
  ngOnInit(): void {
    this.getCahtResponse();
    setInterval(() => {
      this.getCahtResponse();
    }, 5000);
  }

  getCahtResponse(){
    let params={
      receiver_id:this.cId.split(',')[0],
      product_id:this.cId.split(',')[1],
    }
    this.appService.chatResponses(params).subscribe((response) => {
     console.log(response);
    }, (error) => {
      alert(error);
    });
  }

  sendMessage(){
    
    let params={
      recipient_id:this.cId.split(',')[0],
      product_id:this.cId.split(',')[1],
      message:this.message
    }
    this.appService.sendMessage(params).subscribe((response) => {
      console.log(response);
      this.message ='';
      this.getCahtResponse();
     }, (error) => {
       alert(error);
     });
  }

  

}
