function Setusername(username){
    this.username = username
    console.log("called")
}

function createUser(username , email , password){
    Setusername.call(this,username) // to hold reference to pass execution context 
    // this.username  = username
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@134","123")
console.log(chai);