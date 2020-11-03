import { Component, OnInit } from '@angular/core';
import { PetProfileService } from './pet-profile.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {


  accountData;
  dataList = [];
  constructor(private _petProfileService: PetProfileService) { }

  ngOnInit(): void {
  }
  getProfileData(email){
    this.dataList = [];
    this._petProfileService.getAccount(email)
    .subscribe(response => {
      for (var i in response){
        console.log(i);
        switch(i){
          case "firstName":
            this.dataList.push("First Name: " + response[i]);
            break;
          case "lastName":
            this.dataList.push("Last Name: " + response[i]);
            break;
          case "address":
            this.dataList.push("Address: " + response[i]);
            break;            
          case "age":
            this.dataList.push("Age: " + response[i]);
            break;        
          case "petName":
            this.dataList.push("Pet Name: " + response[i]);
            break;                    
        }
      }
      [this.dataList[0], this.dataList[1]] = [this.dataList[1], this.dataList[0]];
      console.log("This is the response: " + JSON.stringify(response));
    })
  }
}
