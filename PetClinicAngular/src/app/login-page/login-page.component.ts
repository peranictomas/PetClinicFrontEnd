import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginmodel } from '../models/loginmodel';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _loginService: LoginPageService, private router:Router) { }
  model;
  error;
  alert;
  ngOnInit(): void {
  }
  registerJSON(email:string,password:string){
    this.error = false;
    this.alert = false;
    this.model = new loginmodel(email,password);
    console.log(this.model);
    console.log(this.error);
    this._loginService.loginAccount(this.model).subscribe( 
      data => JSON.stringify(data),
      err => {if(JSON.stringify(err).includes("Bad"))
      {
        this.error = true;
        this.alert = true;
        console.log("Error Encountered")
      }},
      () => {
        this.router.navigate(['/','login'])    
      }
    );
  }
}
