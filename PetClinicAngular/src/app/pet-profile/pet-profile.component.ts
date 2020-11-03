import { Component, OnInit } from '@angular/core';
import { PetProfileService } from './pet-profile.service';
import {petprofilemodel} from '../models/petprofilemodel'

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {


  accountData;
  dataList = [];
  //firstName:string,lastName:string,email:string,gender:string,address:string,petName:string,age:number
  constructor(private _petProfileService: PetProfileService) { }

  ngOnInit(): void {
  }
  getProfileData(email){
    this._petProfileService.getAccount(email)
    .subscribe(response => {
      for (var i in response){
        console.log(i);
        switch(i){
          case "firstName":
            this.dataList.push(response[i]);
            break;
          case "lastName":
            this.dataList.push(response[i]);
            break;
          case "email":
            this.dataList.push(response[i]);
            break;
          case "gender":
            this.dataList.push(response[i]);
            break;  
          case "address":
            this.dataList.push(response[i]);
            break;            
          case "age":
            this.dataList.push(response[i]);
            break;        
          case "petName":
            this.dataList.push(response[i]);
            break;                    
        }
      }
      console.log("This is the response: " + JSON.stringify(response));
    })
  }
}
