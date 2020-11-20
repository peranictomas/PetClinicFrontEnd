import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetProfileService {

  constructor(private http: HttpClient) { }

  url = "https://localhost:44346/api/v1/users/findbyemail?email=";
  urlAllUsers = "https://localhost:44346/api/v1/users/GetUserList";
  urlDeleteUser = "https://localhost:44346/api/v1/users/DeleteUser?index=";
  urlUpdateUser = "https://localhost:44346/api/v1/users/UpdateUserInfo";

  getAccount(email:string){
    return this.http.get(this.url + email);
  }
  
  getAllUsers(){
    return this.http.get(this.urlAllUsers)
  }

  deleteUser(value:number){
    return this.http.delete(this.urlDeleteUser + value)
  }

  updateUser(user:any){
    return this.http.post(this.urlDeleteUser,user)
  }
}
