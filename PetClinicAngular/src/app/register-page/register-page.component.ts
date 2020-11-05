import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {registermodel} from '../models/registermodel'
import {RegisterPageService} from './register-page.service'
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  constructor(private _registerService: RegisterPageService, private router:Router) { }
  model;
  error;
  alert;
  ngOnInit(): void {
  }
  registerJSON(firstName:string,lastName:string,email:string,password:string,passwordConfirm:string){
    this.error = false;
    this.alert = false;
    this.model = new registermodel(email,password,passwordConfirm,firstName,lastName);
    console.log(this.model);
    console.log(this.error);
    this._registerService.registerAccount(this.model).subscribe( 
      data => JSON.stringify(data),
      err => {if(JSON.stringify(err).includes("error"))
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
