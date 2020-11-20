import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PetProfileService } from './pet-profile.service';
import { petprofileusermodel} from '../models/petprofileusermodel'

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  @Output() delete: EventEmitter<string> = new EventEmitter();

  
  accountData;
  dataList = [];
  allUserList:any;
  length = 0;
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
      console.log(response);
      for (var i in response){
        this.model = new petprofileusermodel(response[i].firstName,response[i].lastName,response[i].age,response[i].address,response[i].petName,);
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
      console.log(response);
    })
    this.getAllProfiles();
  }

  updateUser(event){
    // var target = event.target || event.srcElement || event.currentTarget;
    // var idAttr = target.attributes.
    // var value = idAttr.nodeValue;
    // console.log("Index being sent: " + value);
    // var model = new petprofileusermodel()
    // this._petProfileService.updateUser(model).subscribe(response => {
    //   console.log(response);
    // })
    // this.getAllProfiles();
  }
}
