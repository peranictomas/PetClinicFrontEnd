import { Component, OnInit } from '@angular/core';
import { MessageBoardPageService } from './messageboard-page.service';
import {messageboardmodel} from '../models/messageboardmodel'
import { messageboardsendmodel } from '../models/messageboardsendmodel';

@Component({
  selector: 'app-messageboard-page',
  templateUrl: './messageboard-page.component.html',
  styleUrls: ['./messageboard-page.component.css']
})
export class MessageboardPageComponent implements OnInit {
  allQuestionsList:any[] = [];
  allCommentsList:any[] = [];
  model;
  toggle = true;
  status = 'Enable'; 
  constructor(private _messageService: MessageBoardPageService) { }

  ngOnInit(): void {
    this.getAllQuestionModels();
  }
  getAllQuestionModels(){
    this._messageService.grabAllQuestions().subscribe(data=>{
      console.log(data);
      for (var i in data){
        this.model = new messageboardmodel(data[i].topic,data[i].content,"",data[i].messageBoardId);
        this.allQuestionsList.push(this.model);
        this.allCommentsList.push(data[i].content);
      }
    });
  }
  sendQuestionModel(question){
    this.model = new messageboardsendmodel("","",question);
    this._messageService.sendQuestionModel(this.model).subscribe(data=>{
      console.log(data);
    })
  }

  commentOnQuestion(event,comment){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.allCommentsList[value] = comment;
  }

click(btn) {
    btn.active = !btn.active
}


}
