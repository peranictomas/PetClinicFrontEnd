export class petprofilemodel {
    userName;
    firstName;
    lastName;
    gender;
    age;
    petName;    
    address;
    
    constructor(firstName:string,lastName:string,userName:string,gender:string,address:string,petName:string,age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.gender = gender;
        this.address = address;
        this.petName = petName;
        this.age = age;
    }
    }
    