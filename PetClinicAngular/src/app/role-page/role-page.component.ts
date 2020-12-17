import { Component, OnInit } from '@angular/core';
import {RolePageService} from '../role-page/role-page.service'
import {rolemodel} from '../models/rolemodel'

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.css']
})
export class RolePageComponent implements OnInit {

  allRolesList:any;
  model;
  roleToSend;
  constructor(private _roleService: RolePageService) { }
  ngOnInit(): void {
  }

  getAdmins(){
    this.roleToSend = 1
    this.allRolesList = [];
    this._roleService.rolesAdmin().subscribe(data=>{
      console.log(data);
      for (var i in data){
        this.model = new rolemodel(data[i].userId,data[i].userName,data[i].isSelected);
        this.allRolesList.push(this.model);
      }
    })
  }

  getUsers(){
    this.roleToSend = 0
    this.allRolesList = [];
    this._roleService.rolesUser().subscribe(data=>{
      console.log(data);
      for (var i in data){
        this.model = new rolemodel(data[i].userId,data[i].userName,data[i].isSelected);
        this.allRolesList.push(this.model);
      }
    })
  }

  getDoctors(){
    this.roleToSend = 2
    this.allRolesList = [];
    this._roleService.rolesDoctor().subscribe(data=>{
      console.log(data);
      for (var i in data){
        this.model = new rolemodel(data[i].userId,data[i].userName,data[i].isSelected);
        this.allRolesList.push(this.model);
      }
    })
  }
  editModel(index){
    console.log("test" + index)
    console.log("before" + this.allRolesList[index].IsSelected);
    if (this.allRolesList[index].IsSelected == true){
      this.allRolesList[index].IsSelected = false
    }
    else{
      this.allRolesList[index].IsSelected = true;
    }
    console.log("after" + this.allRolesList[index].IsSelected);
  }
  sendEdit(){
    this._roleService.editRole(this.allRolesList,this.roleToSend).subscribe(data=>{
        console.log("Returned data:" + data);
    })
  }


}
