import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterPageService {

  url = "https://localhost:44346/api/v1/users/register";
  constructor(private http: HttpClient) { }

  fakeData = {
    Email:"123vik@gmail.com",
    Password:"1234",
    ConfirmPassword:"1234",
    FirstName:"Vik",
    LastName:"Lam"
  }

  registerAccount(){
    return this.http.post(this.url,this.fakeData).subscribe(response => {
      console.log(response);
    })
  }

}
