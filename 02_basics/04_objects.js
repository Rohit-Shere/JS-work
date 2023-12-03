const tinderUser = new Object ()



tinderUser.id='23453'
tinderUser.name= "Rohit"
tinderUser.isLoggedIn= false


// console.log(tinderUser);

const regularUser= {
    email:"rohit@gmail.com",
    fullname:{
        firstname:"Rohit",
        lastname:"Shere"
    }
}

// console.log(regularUser.fullname.lastname)

const obj1={
    1:'a',2:'b',3:'c'
}

const obj2={
    4:'d', 5:'e'
}

const obj3= {obj1, obj2}
console.log(obj3);