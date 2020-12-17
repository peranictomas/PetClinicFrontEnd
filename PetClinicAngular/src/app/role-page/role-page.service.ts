import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolePageService {

  url = "https://localhost:44346/api/v1/users/ManageUserRole?index=";
  urlEdit = "https://localhost:44346/api/v1/users/EditUserRole?index="
  errorCheck = false;
  constructor(private http: HttpClient) { }


  rolesUser(){
    return this.http.get(this.url+ 0)
  }
  rolesDoctor(){
    return this.http.get(this.url+ 2)
  }
  rolesAdmin(){
    return this.http.get(this.url+ 1)
  }

  editRole(editModel,index){
    return this.http.post(this.urlEdit+index,editModel)
  }

}
