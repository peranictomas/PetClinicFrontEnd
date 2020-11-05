import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {registermodel} from '../models/registermodel'
import {RegisterPageService} from './register-page.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private _registerService: RegisterPageService, private router:Router) { }
  model;
  error = true;
  ngOnInit(): void {
  }
  registerJSON(firstName:string,lastName:string,email:string,password:string,passwordConfirm:string){
    this.model = new registermodel(email,password,passwordConfirm,firstName,lastName);
    console.log(this.model);
    this._registerService.registerAccount(this.model)
    console.log("Response: " + this._registerService.errorCheck);
    if (this._registerService.errorCheck == true)
    {
      this.error = false;
    }
    else {
      this.router.navigate(['/','login'])
  }
  }


}
