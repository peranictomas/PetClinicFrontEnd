import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBoardPageService {

  url = "https://localhost:44346/api/messageboards/GetAllQA";
  urlCreateMessage = "https://localhost:44346/api/messageboards/CreateMessage"
  urlComment= "";
  urlLikeComment="";
  urlLikeQuestion="";
  constructor(private http: HttpClient) { }

  grabAllQuestions(){
    return this.http.get(this.url);
  }
  sendQuestionModel(questionModel){
    return this.http.post(this.urlCreateMessage,questionModel);
  }

}
