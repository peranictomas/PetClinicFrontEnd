export class petprofilemodel {
    email;
    firstName;
    lastName;
    gender;
    age;
    petName;    
    address;
    
    constructor(firstName:string,lastName:string,email:string,gender:string,address:string,petName:string,age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.petName = petName;
        this.age = age;
    }
    }
    