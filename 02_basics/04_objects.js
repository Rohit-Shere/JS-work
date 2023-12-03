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

// const obj3= {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [{
    id:1,
    email:"ro@gamil.com"
}
]

// console.log(users[1].email)

// console.log(tinderUser.hasOwnProperty('name'))


const course= {
    coursename : "js in hindi ",
    price:'999',
    cousreInstructor: 'Pratul '
}

const {cousreInstructor:instructor}= course
console.log(instructor)

// this is JSON 
// {
//     "name": " rohit",
//     "id":124,
//     "age":"13"
// }