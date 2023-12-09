const user = {
    username : "Harshit",
    logincount: 8,
    signedIn : true,

    getUserdetails : function(){
          console.log("Got user details")
          console.log(this)
        }
}

console.log(user.username);
console.log(user.getUserdetails())

/// Just LIKE C++ WE HAVE THIS Features

function User(username,logincount,isLogedin){
    this.username = username;
    this.logincount = logincount;
    this.isLogedin = isLogedin;
    // return this
}

const userone = new User("harshit" ,  12 , true)
console.log(userone)