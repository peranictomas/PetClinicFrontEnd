export class registermodel {
Email;
Password;
ConfirmPassword;
FirstName;
LastName;


constructor(email:string,password:string,confirmPassword:string,firstName:string,lastName:string){
    this.Email = email;
    this.Password = password;
    this.ConfirmPassword = confirmPassword;
    this.FirstName = firstName;
    this.LastName = lastName;
}
}
