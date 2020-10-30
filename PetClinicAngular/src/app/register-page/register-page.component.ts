import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {registermodel} from '../models/registermodel'
import {RegisterPageService} from './register-page.service'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private _registerService: RegisterPageService) { }
  model;
  registerModel;
  ngOnInit(): void {
  }

  registerJSON(firstName,lastName,email,password,passwordConfirm){
    this.model = new registermodel(firstName,lastName,email,password,passwordConfirm);
    console.log(this.model);
    this._registerService.registerAccount(this.model)
    .subscribe(response => {
      console.log("This is the response" + response);
    })
  }

}
