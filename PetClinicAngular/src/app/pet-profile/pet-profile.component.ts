import { Component, OnInit } from '@angular/core';
import { PetProfileService } from './pet-profile.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {


  accountData;
  constructor(private _petProfileService: PetProfileService) { }

  ngOnInit(): void {
  }
  getProfileData(){
    this._petProfileService.getAccount(this.accountData)
    .subscribe(response => {
      console.log("This is the response: " + response);
    })
  }
}
