export class petprofileusermodel {
    firstName;
    lastName;
    age;
    petName;    
    address;
    
    constructor(firstName:string,lastName:string,age:string,address:string,petName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.petName = petName;
    }
    }