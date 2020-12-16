import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  url = "https://localhost:44346/api/v1/users/login";
  constructor(private http: HttpClient) { }


  loginAccount(jsonLogin){
    return this.http.post(this.url,jsonLogin)
  }
}
