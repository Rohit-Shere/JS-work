// singleton 


// object literals

//Object.create  ---> for singleton


const mySym = Symbol("key1")

const JsUser = {
    name:"Rohit",
    age: 20,
    [mySym]:"mykey1",
    location: "Pune",
    email: "rohit@gmail.com",
    isLoggedIn:false,
    lastLoginDays:['Monday', 'Sunday']
    
}

console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySym]);


JsUser.age= 19
Object.freeze(JsUser)
JsUser.age=20
console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting);
  

JsUser.greetingTwo= function()
{
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());