import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBoardPageService {

  url = "https://localhost:44346/api/v1/users/";
  urlComment= "";
  urlLikeComment="";
  urlLikeQuestion="";
  constructor(private http: HttpClient) { }

  grabAllQuestions(){
    //this.http.get();
  }
  sendQuestionModel(questionModel){
    //this.http.post(questionModel);
  }



}
