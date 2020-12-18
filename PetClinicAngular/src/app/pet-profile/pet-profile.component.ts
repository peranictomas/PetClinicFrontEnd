import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PetProfileService } from './pet-profile.service';
import { petprofileusermodel} from '../models/petprofileusermodel'
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  @Output() delete: EventEmitter<string> = new EventEmitter();

  
  dataList = [];
  allUserList:any;
  model;
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

  getAllProfiles(){
    this.allUserList = [];
    this._petProfileService.getAllUsers().subscribe(response => {
      for (var i in response){
        this.model = new petprofileusermodel(response[i].userName,response[i].firstName,response[i].lastName,response[i].age,response[i].address,response[i].petName,response[i].gender,response[i].contactPhone);
        this.allUserList.push(this.model);
      }
    })
  }

  deleteUser(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log("Index being sent: " + value);
    this._petProfileService.deleteUser(value).subscribe(response => {
    })
    this.getAllProfiles();
  }

  updateUser(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    var firstName = "firstName" + value;
    var lastName = "lastName" + value;
    var age = "age" + value;
    var address = "address" + value;
    var petName = "petName" + value;
    var gender = "gender" + value;
    var contactPhone = "contactPhone" + value;
    var updatedFirstName = (<HTMLInputElement>document.getElementById(firstName)).value;
    var updatedlastName = (<HTMLInputElement>document.getElementById(lastName)).value;
    var updatedage = (<HTMLInputElement>document.getElementById(age)).value;
    var updatedAgeNumber = Number(updatedage);
    var updatedaddress = (<HTMLInputElement>document.getElementById(address)).value;
    var updatedpetName = (<HTMLInputElement>document.getElementById(petName)).value;
    var updatedgender = (<HTMLInputElement>document.getElementById(gender)).value;
    var updatedcontactPhone = (<HTMLInputElement>document.getElementById(contactPhone)).value;
    var updatedcontactPhoneNumber = Number(updatedcontactPhone);
    var model = new petprofileusermodel(this.allUserList[value].email,updatedFirstName,updatedlastName,updatedAgeNumber,updatedaddress,updatedpetName,updatedgender,updatedcontactPhoneNumber);
    console.log(model);
    this._petProfileService.updateUser(model).subscribe(response => {
      console.log(response);
    })
  }

}
