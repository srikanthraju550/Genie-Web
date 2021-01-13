import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatHistory: any;
  chatReposnce: any;
  cId: any;
  pId: any;
  message: any;
  rId: any;

  constructor(public appService: AppService) {
    
   }

  ngOnInit(): void {
    this.getChatHistory();
  }

  getChatHistory() {
    this.appService.getChatList().subscribe((response) => {
      this.chatHistory = response.data;
    }, (error) => {
      alert(error);
    });
  }



  getChatResponse(d) {
    this.readChat(d.chat_id);
    let data = {
      receiver_id: d.recipient_id,
      product_id: d.product_id
    }
    this.rId = d.recipient_id;
    this.cId = d.chat_id;
    this.pId = d.product_id;
    this.appService.chatResponses(data).subscribe((response) => {
      this.chatReposnce = response.data;
    }, error => {
      alert(error);
    });

  }

  readChat(id) {
    let params = {
      chat_id: id
    }
    this.appService.readChat(params).subscribe((response) => {
    }, error => {
      alert(error);
    });
  }

  sendMessage() {
    let params = {
      recipient_id: this.rId,
      product_id: this.pId,
      message: this.message
    }
    this.appService.sendMessage(params).subscribe((response) => {
      this.message ='';
      this.getChatHistory();
    }, error => {
      alert(error);
    });
  }

  deleteChat() {
    let params = {
      chat_id: this.cId
    }

    this.appService.deleteChat(params).subscribe((response) => {
      alert('deleted Successfully');
      this.message ='';
      this.getChatHistory();
    }, error => {
      alert(error);
    });
  }
}
