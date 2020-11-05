import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterPageService {

  url = "https://localhost:44346/api/v1/users/register";
  errorCheck = false;
  constructor(private http: HttpClient) { }


  registerAccount(jsonRegister){
    return this.http.post(this.url,jsonRegister)
  }

}
