export class petprofileusermodel {
    email;
    firstName;
    lastName;
    age;
    petName;    
    address;
    gender;
    contactPhone;
    
    constructor(email:string,firstName:string,lastName:string,age:number,address:string,petName:string,gender:string,contactPhone:number){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.petName = petName;
        this.gender = gender;
        this.contactPhone = contactPhone;
    }
    }