import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetProfileService {

  constructor(private http: HttpClient) { }

  url = "https://localhost:44346/api/v1/users/findbyemail?email=";
  urlAllUsers = "https://localhost:44346/api/v1/users/GetUserList";
  urlDeleteUser = "https://localhost:44346/api/v1/users/DeleteUser?email=";

  getAccount(email:string){
    return this.http.get(this.url + email);
  }
  
  getAllUsers(){
    return this.http.get(this.urlAllUsers)
  }

  deleteUser(email:string){
    return this.http.get(this.urlDeleteUser + email)
  }
}
