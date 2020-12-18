import { Component, OnInit } from '@angular/core';
import { MessageBoardPageService } from './messageboard-page.service';
import {messageboardmodel} from '../models/messageboardmodel'

@Component({
  selector: 'app-messageboard-page',
  templateUrl: './messageboard-page.component.html',
  styleUrls: ['./messageboard-page.component.css']
})
export class MessageboardPageComponent implements OnInit {
  allQuestionsList:any[] = [];
  model;
  constructor(private _messageService: MessageBoardPageService) { }

  ngOnInit(): void {
    this.getAllQuestionModels();
  }
  getAllQuestionModels(){
    this._messageService.grabAllQuestions().subscribe(data=>{
      console.log(data);
      for (var i in data){
        this.model = new messageboardmodel(data[i].question,data[i].answer);
        this.allQuestionsList.push(this.model);
      }
    });
  }
  sendQuestionModel(question){
    this._messageService.sendQuestionModel(question).subscribe(data=>{
      console.log(data);
    })
  }

  commentOnQuestion(index,comment){
    // this.allQuestionsList[index].Comments.push(comment);
    // this.sendQuestionModel(this.allQuestionsList[index]);
  }


}
