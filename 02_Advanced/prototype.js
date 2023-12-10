// let myname = "harshit"

// console.log(myname.trueLength);
let myhero = ["thor" , "spiderman"]
 let heropower = {
    thor: "Hammer",
    spiderman : "sling",

    getspiderpower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
 }

 Array.prototype.heyharshit = function(){
    console.log(`harshit says hi`);
 }
 Object.prototype.harshit = function(){
    console.log(`Harshit is in all Objects`);
 }
 heropower.harshit();
//  heropower.heyharshit();
myhero.heyharshit();
const user = {
    username: "chai",
    email:'chai@google.com'
}
const Teacher = {
    makevideo : true

}
const Teachingsupp = {
    isavailable : false
}
const Tasupp = {
    makeassignment:'Js Assignment',
    fulltime : true,
    __proto__:Teachingsupp
}
Teacher.__proto__=user
//Modern syntax
Object.setPrototypeOf(Teachingsupp,Teacher)
let anotherusername = "HAEISKNKN   "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)
}
anotherusername.trueLength()