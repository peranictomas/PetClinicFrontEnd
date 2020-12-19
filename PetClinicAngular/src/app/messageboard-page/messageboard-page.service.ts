import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBoardPageService {

  url = "https://localhost:44346/api/messageboards/ListAllMessages";
  urlCreateMessage = "https://localhost:44346/api/messageboards/CreateMessage"
  urlComment= "https://localhost:44346/api/messageboards/AddComment";
  constructor(private http: HttpClient) { }

  grabAllQuestions(){
    return this.http.get(this.url);
  }
  sendQuestionModel(questionModel){
    return this.http.post(this.urlCreateMessage,questionModel);
  }

  addComment(model,mid){
    return this.http.post(this.urlComment,{model,mid})
  }
}
