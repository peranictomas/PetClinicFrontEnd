import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterPageService {

  url = "https://localhost:44346/api/v1/users/register";
  public errorCheck = false;
  constructor(private http: HttpClient) { }


  registerAccount(jsonRegister){
    return this.http.post(this.url,jsonRegister).subscribe( response => {
      JSON.stringify(response);
    },
    (err) => {console.log(err,this.errorCheck = true)});
  }

}