// class User {
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//     console.log(`Username is ${this.username}`)
//     }
// }

// class Teacher extends User {
//     constructor(username,email,password){
//         super(username)
// this.email = email
// this.password = password
//     }
//     addCourse(){
//         console.log(`This Course was added by ${this.username}`)
//     }
// }
// const chai =  new Teacher("Harshit", "hj876554@gmail.com","123")
// chai.addCourse()
// console.log(chai instanceof User)

//Static Properties 

class User{
    constructor(username){
        this.username = username
    }
    logMe (){
        console.log(`Username : ${this.username}`)
    }
   static createId(){ //This does not give access to inherite user
        return `123`
    }
}
const hitesh = new User ("Hitesh");
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","I@phone.com")  
iphone.logMe()
console.log(iphone.createId());