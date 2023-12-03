const user = {
    username:"hetesh",
    price :999,

    welcomeMessage :function(){
        console.log(`${this.username}, welcome to website`);
    }


}

user.welcomeMessage()
user.username= 'sam'
user.welcomeMessage()

// function chai(){
//     console.log(this)
// }
// chai()

// const chai =function( ){
//     let username= "rohit"
//     console.log(this.username);

// }

const chai= ()=>{
    let username= 'rohit'
    console.log(this);
}

// chai()

// const addTwo= (num1, num2)=> num1+num2

// const addTwo= (num1, num2)=>(num1+num2)

const addTwo= (num1, num2)=> ({name:"Rohit"})

console.log(addTwo(3,4))


