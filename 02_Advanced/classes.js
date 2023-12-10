// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPass() {
//         return `${this.password}abd`
//     }
//     changeusername(){
//       return`${this.username.toUpperCase()}`
//         }
//     }
// }
// const chai = new User( "chai", "chai@123", "134")
// console.log(chai.encryptPass());
// console.log(chai.changeusername());
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPass=function(){
    return `${this.password}abd`
}
User.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User( "chai", "chai@123", "134")
console.log(tea.encryptPass());
console.log(tea.changeusername());